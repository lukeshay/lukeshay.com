export const getEnvVar = (key: string) => {
	let result: string | undefined;

	try {
		// @ts-expect-error
		result = Deno.env.get(key);
	} catch (error) {
		const e = error as Error;

		console.error(e.name);
		console.error(e.message);
		console.error(e.stack);
	}

	return (
		result ??
		(process.env[key] as string | undefined) ??
		(import.meta.env[key] as string | undefined)
	);
};
