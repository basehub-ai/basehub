import type { ImageLoaderProps, ImageProps } from "next/image";
import { unstable_getImgProps } from "next/image";
import { thumbHashToDataURL } from "thumbhash";
import { forwardRef, useId } from "react";

const r2URL_deprecated = `https://basehub.earth`;
const assetsURL = `https://assets.basehub.com`;
const dummyPlaceholderURL = "data:image/bshb-replace-me";

export const basehubImageLoader = ({
  src,
  width,
  quality,
}: ImageLoaderProps) => {
  let url;

  try {
    url = new URL(src);
  } catch (error) {
    throw new Error(`Invalid BaseHub Image URL: ${src}

Expected origin to be one of:
- ${r2URL_deprecated} (deprecated)
- ${assetsURL}
`);
  }

  const params = [`width=${width}`, `quality=${quality || 90}`];

  if (url.href.includes(r2URL_deprecated)) {
    if (url.pathname.startsWith("/cdn-cgi/image/")) {
      // image has existing params. we'll append the extra ones
      const [_empty, _cdnThing, _imageThing, currentParams = "", ...rest] =
        url.pathname.split("/");
      const filteredParams = currentParams.split(",").filter((param) => {
        return (
          !param.startsWith("width=") &&
          !param.startsWith("quality=") &&
          !param.startsWith("w=") &&
          !param.startsWith("q=")
        );
      });
      let newParams = filteredParams.join(",") + params.join(",");
      if (newParams.includes("format=") === false) {
        newParams += ",format=auto";
      }
      url.pathname = `/cdn-cgi/image/${newParams}/${rest.join("/")}`;
    } else {
      // image has no existing params. we'll append the extra ones
      params.push("format=auto");
      url.pathname = `/cdn-cgi/image/${params.join(",")}${url.pathname}`;
    }
  } else if (url.href.includes(assetsURL)) {
    // simpler! just append the params
    params.forEach((param) => {
      const [key, value] = param.split("=");
      if (!key || !value) return;
      url.searchParams.set(key, value);
    });
    if (url.searchParams.has("format") === false) {
      url.searchParams.set("format", "auto");
    }
  }

  return url.toString();
};

export type BaseHubImageProps = Omit<ImageProps, "placeholder"> & {
  /**
   * Consider using `thumbhash` instead, as it'll send less KBs to the browser and look better. We'll automatically convert it to a data URL and use it as a placeholder.
   *
   * A placeholder to use while the image is loading. Possible values are blur, empty, or data:image/...
   * @defaultValue empty
   * @see https://nextjs.org/docs/api-reference/next/image#placeholder
   */
  placeholder?: string;
  /**
   * A thumbhash that'll be used as a placeholder while the image is loading.
   * It'll automatically be converted to a data URL and used as a placeholder.
   */
  thumbhash?: string;
  /**
   * Nonce string to pass to the inline script for CSP headers.
   * We use an inline script to set the thumbhash placeholder (which is generated on the client, on the fly).
   */
  nonce?: string | undefined;
};

/**
 * Uses `next/image` under the hood. Just passes BaseHub's `loader` so that it utilizes BaseHub's Image Optimization.
 *
 * Literally just returns:
 * ```tsx
 * <Image {...props} loader={basehubImageLoader} />
 * ```
 */
export const BaseHubImage = forwardRef<HTMLImageElement, BaseHubImageProps>(
  ({ thumbhash, ...props }, ref) => {
    "use client";

    const _id = useId();
    const id = `bshb-image-${_id}`;

    // split url by `?` to check if it has query params
    const unoptimized =
      props.unoptimized ??
      props.src.toString().split("?")[0]?.endsWith(".svg") ??
      undefined;

    let placeholder = props.placeholder;
    if (placeholder === undefined && thumbhash) {
      if (typeof window !== "undefined") {
        // @ts-ignore
        window.__bshb_thumbHashToDataURL = thumbHashToDataURL;
      }
      placeholder = dummyPlaceholderURL;
    }

    const imageProps = unstable_getImgProps({
      ...props,
      placeholder: placeholder as ImageProps["placeholder"],
      unoptimized,
      id,
    });

    if (
      imageProps.props.style.backgroundImage &&
      imageProps.props.style.backgroundImage.includes(dummyPlaceholderURL)
    ) {
      imageProps.props.style.backgroundImage =
        imageProps.props.style.backgroundImage.replace(
          dummyPlaceholderURL,
          "var(--bshb-thumbhash-placeholder)"
        );
    }

    return (
      <>
        {/* eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element */}
        <img {...imageProps} ref={ref} />
        {placeholder === undefined && thumbhash && (
          <script
            suppressHydrationWarning
            nonce={typeof window === "undefined" ? props.nonce : ""}
            dangerouslySetInnerHTML={{
              __html: `
try {
  const img = document.getElementById("${id}");
  img.style["--bshb-thumbhash-placeholder"] = window.__bshb_thumbHashToDataURL("${thumbhash}");
} catch (e) {
  // ignore
}
`,
            }}
          />
        )}
      </>
    );
  }
);
