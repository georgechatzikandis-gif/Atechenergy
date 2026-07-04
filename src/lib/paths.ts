export const base = import.meta.env.BASE_URL;

// Joins a site-relative path (e.g. "products/", "#faq") onto the configured
// base path, so links resolve correctly whether the site is deployed at a
// domain root or under a GitHub Pages project subpath.
export function withBase(path: string): string {
  return base + path.replace(/^\//, "");
}
