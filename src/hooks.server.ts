// hooks.server.ts
import { dev } from "$app/environment";
import { auth } from "$lib/server/lucia";
import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.auth = auth.handleRequest(event , dev ? "DEV" : "PROD");
	return await resolve(event);
};
