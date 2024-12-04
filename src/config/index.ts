const config = {
  BACKEND_URI: process.env.NEXT_PUBLIC_BACKEND_URI as string,
  NODE_ENV: process.env.NEXT_PUBLIC_NODE_ENV as string
};
export const { BACKEND_URI, NODE_ENV } = config;
