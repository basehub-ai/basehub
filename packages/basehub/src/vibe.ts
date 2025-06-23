export const isV0 = () => {
  try {
    return (
      // eslint-disable-next-line turbo/no-undeclared-env-vars
      process.env.VERCEL_URL?.includes(".lite.vusercontent.net") ||
      // @ts-ignore
      process.env.NEXT_PUBLIC_VERCEL_URL?.includes(".lite.vusercontent.net")
    );
  } catch (err) {
    return false;
  }
};

export const isBolt = () => {
  try {
    // eslint-disable-next-line turbo/no-undeclared-env-vars
    return process.env.SHELL === "/bin/jsh";
  } catch (err) {
    return false;
  }
};

export const isV0OrBolt = () => {
  return isV0() || isBolt();
};

export const getV0ChatId = (): string | null => {
  try {
    if (!isV0()) return null;

    let chatId: string | null = null;

    let storage: {
      getItem: (key: string) => string | null;
      setItem: (key: string, value: string) => void;
    } | null = null;

    // v0 doesn't support cookies yet. maybe in the future we uncomment this.
    // try {
    //   // first try nextjs cookies
    //   // @ts-ignore
    //   const { cookies } = await import("next/headers");
    //   const cookieStore = await cookies();
    //   storage = {
    //     getItem: (key) => cookieStore.get(key)?.value ?? null,
    //     setItem: (key, value) =>
    //       cookieStore.set(key, value, {
    //         httpOnly: false,
    //         sameSite: "strict",
    //       }),
    //   };
    // } catch (err) {
    //   // noop
    // }

    if (!storage) {
      // try localStorage (v0 runs in the browser)
      try {
        if (typeof localStorage !== "undefined") {
          storage = {
            getItem: (key) => localStorage.getItem(key) ?? null,
            setItem: (key, value) => localStorage.setItem(key, value),
          };
        }
      } catch (err) {
        // noop
      }
    }

    if (!storage) return null;

    chatId = storage.getItem("__bshb_vibe_chatId");

    if (chatId) return chatId;

    // generate, then store
    const newChatId = Math.random().toString(36).substring(2, 15);
    storage.setItem("__bshb_vibe_chatId", newChatId);

    return newChatId;
  } catch (err) {
    return null;
  }
};
