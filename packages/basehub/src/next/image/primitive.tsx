import type { ImageLoaderProps, ImageProps } from "next/image";
import Image from "next/image";
import { forwardRef } from "react";

const r2URL_deprecated = `https://basehub.earth`;
const assetsURL = `https://assets.basehub.com`;

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
          !param.startsWith("q=") &&
          // also strip height because next.js doesn't need it
          !param.startsWith("h=") &&
          !param.startsWith("height=")
        );
      });
      let newParams = [...filteredParams, ...params].join(",");
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
    // also strip height because next.js doesn't need it
    url.searchParams.delete("height");
    url.searchParams.delete("h");
  }

  // pass old origin to new origin
  const imageURL = new URL(assetsURL);
  if (url.href.includes(r2URL_deprecated)) {
    if (url.pathname.startsWith("/cdn-cgi/image/")) {
      const [_empty, _cdnThing, _imageThing, currentParams = "", ...rest] =
        url.pathname.split("/");
      imageURL.pathname = rest.join("/");
      imageURL.search = currentParams.split(",").join("&");
    } else {
      imageURL.pathname = url.pathname;
      imageURL.search = url.search;
    }
  } else if (url.href.includes(assetsURL)) {
    imageURL.pathname = url.pathname;
    imageURL.search = url.search;
  } else {
    // the image is not a basehub image. we'll just return the original url
    return src;
  }

  return imageURL.toString();
};

export type BaseHubImageProps = Omit<ImageProps, "placeholder"> & {
  /**
   * A placeholder to use while the image is loading. Possible values are blur, empty, or data:image/...
   * @defaultValue empty
   * @see https://nextjs.org/docs/api-reference/next/image#placeholder
   */
  placeholder?: string;
};

/**
 * Uses `next/image` under the hood. Just passes BaseHub's `loader` so that it utilizes BaseHub's Image Optimization.
 *
 * Literally just returns:
 * ```tsx
 * <Image {...props} loader={basehubImageLoader} />
 * ```
 * and a few other props.
 */
export const BaseHubImage = forwardRef<HTMLImageElement, BaseHubImageProps>(
  (props, ref) => {
    "use client";

    const unoptimized =
      props.unoptimized ??
      props.src.toString().split("?")[0]?.endsWith(".svg") ??
      undefined;

    return (
      // eslint-disable-next-line jsx-a11y/alt-text
      <Image
        {...props}
        placeholder={props.placeholder as ImageProps["placeholder"]}
        loader={basehubImageLoader}
        unoptimized={unoptimized}
        ref={ref}
      />
    );
  }
);
