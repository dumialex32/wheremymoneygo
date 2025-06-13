/// <reference types="vite/client" />

declare module "*.css?url" {
  const path: string;
  export default path;
}
