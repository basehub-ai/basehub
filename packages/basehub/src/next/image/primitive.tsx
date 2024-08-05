import type { ImageLoaderProps, ImageProps } from "next/image";
import Image from "next/image";

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

/**
 * Uses `next/image` under the hood. Just passes BaseHub's `loader` so that it utilizes BaseHub's Image Optimization.
 *
 * Literally just returns:
 * ```tsx
 * <Image {...props} loader={basehubImageLoader} />
 * ```
 */
export const BaseHubImage = (props: ImageProps) => {
  "use client";
  // split url by `?` to check if it has query params
  const unoptimized: boolean = props.unoptimized ?? props.src.toString().split("?")[0]!.endsWith(".svg");
  // eslint-disable-next-line jsx-a11y/alt-text
  return <Image {...props} loader={basehubImageLoader} unoptimized={unoptimized} />;
};
