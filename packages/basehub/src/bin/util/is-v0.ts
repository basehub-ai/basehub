export const isV0 = () => {
  try {
    return (
      process.env.VERCEL_URL?.includes(".lite.vusercontent.net") ||
      process.env.NEXT_PUBLIC_VERCEL_URL?.includes(".lite.vusercontent.net")
    );
  } catch (err) {
    return false;
  }
};

export const isBolt = () => {
  try {
    return process.env.SHELL === "/bin/jsh";
  } catch (err) {
    return false;
  }
};

export const isV0OrBolt = () => {
  return isV0() || isBolt();
};
