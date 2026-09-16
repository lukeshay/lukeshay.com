import { tokenize, type CacheControl } from "cache-parser";
import { type AstroGlobal } from "astro";

export const setCacheControl = (
	astro: AstroGlobal,
	cacheControl: CacheControl,
) => {
	astro.response.headers.set(
		"Cache-Control",
		import.meta.env.DEV ? "no-cache" : tokenize(cacheControl).join(", "),
	);
};
