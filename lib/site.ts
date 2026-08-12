export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://setayeshchegini.github.io/bumblyz";

export function assetPath(path: string) {
  if (!path.startsWith("/")) return path;
  if (!BASE_PATH || path === BASE_PATH || path.startsWith(`${BASE_PATH}/`)) return path;
  return `${BASE_PATH}${path}`;
}
