/* eslint-disable turbo/no-undeclared-env-vars */
import {
  // @ts-ignore
  Scalars,
  // @ts-ignore
  // eslint-disable-next-line import/no-unresolved
} from "../schema";

/* -------------------------------------------------------------------------------------------------
 * Client
 * -----------------------------------------------------------------------------------------------*/

type KeysStartingWith<Obj, Prefix extends string> = {
  [K in keyof Obj]: K extends `${Prefix}${string}` ? K : never;
}[keyof Obj];

type ExtractWorkflowKey<T extends string> = T extends `${infer Base}:${string}`
  ? Base
  : T;

// Get all event key types (bshb_event_*)
export type WorkflowKeys = KeysStartingWith<Scalars, "bshb_workflow">;

// Map from event key to its schema type
type WorkflowSchemaMap = {
  // @ts-ignore
  [K in WorkflowKeys]: Scalars[`schema_${K}`];
};

export const authenticateWebhook = async <
  Key extends `${WorkflowKeys}:${string}`,
>({
  secret: _secret,
  body,
  signature,
}: {
  /**
   * The body of the incoming webhook request
   * Can be:
   * - Parsed JSON from request.json()
   * - Raw string from request.text()
   * - ReadableStream from request.body
   */
  body: unknown;
  /**
   * The signature of the incoming webhook request—you get this via request.headers["x-basehub-webhook-signature"]
   * This should be a hex-encoded HMAC SHA-256 hash of the request body
   */
  signature: string | null | Headers;
  /**
   * The secret used for verifying the incoming webhook request—you get this via the BaseHub API
   * This secret should never be exposed in requests or responses
   */
  secret: Key;
}): Promise<
  | { success: true; payload: WorkflowSchemaMap[ExtractWorkflowKey<Key>] }
  | { success: false; error: string }
> => {
  try {
    if (signature && typeof signature === "object") {
      signature = signature.get("x-basehub-webhook-signature");
    }
    if (!signature) {
      return { success: false, error: "Signature is required" };
    }

    let secret: string | undefined = _secret;
    if (_secret.startsWith("bshb_workflow")) {
      secret = _secret.split(":")[1];
    }
    if (typeof secret !== "string") {
      return { success: false, error: "Invalid secret" };
    }

    // Handle different body types
    let rawBody: string;
    let parsedBody: unknown;

    if (body instanceof ReadableStream) {
      // Convert stream to text
      const reader = body.getReader();
      const chunks = [];
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        chunks.push(value);
      }
      const bodyText = new TextDecoder().decode(
        new Uint8Array(chunks.flatMap((chunk) => Array.from(chunk)))
      );
      rawBody = bodyText;
      parsedBody = JSON.parse(bodyText);
    } else if (typeof body === "string") {
      rawBody = body;
      parsedBody = JSON.parse(body);
    } else {
      // Already parsed JSON
      rawBody = JSON.stringify(body);
      parsedBody = body;
    }

    if (typeof parsedBody !== "object" || parsedBody === null) {
      return { success: false, error: "Invalid body" };
    }

    const encoder = new TextEncoder();
    const bodyData = encoder.encode(rawBody);
    const secretData = encoder.encode(secret);

    const key = await crypto.subtle.importKey(
      "raw",
      secretData,
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["sign"]
    );

    const signed = await crypto.subtle.sign("HMAC", key, bodyData);
    const calculatedSignature = Array.from(new Uint8Array(signed))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");

    if (signature.length !== calculatedSignature.length) {
      return { success: false, error: "Invalid signature" };
    }

    let mismatch = 0;
    for (let i = 0; i < signature.length; i++) {
      mismatch |= signature.charCodeAt(i) ^ calculatedSignature.charCodeAt(i);
    }

    if (mismatch !== 0) {
      return { success: false, error: "Invalid signature" };
    }

    return {
      success: true,
      payload: parsedBody as WorkflowSchemaMap[ExtractWorkflowKey<Key>],
    };
  } catch (error) {
    let message =
      error instanceof Error ? error.message : "Signature verification failed";
    if (message === "Unexpected end of JSON input") {
      message = "Invalid body";
    }
    return {
      success: false,
      error: message,
    };
  }
};
