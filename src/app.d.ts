// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			auth: import("lucia-auth").AuthRequest;
		}
		// interface PageData {}
		// interface Platform {}
	}
}

/// <reference types="lucia-auth" />
declare global {
	namespace Lucia {
		type Auth = import("$lib/server/lucia").Auth;
		// eslint-disable-next-line @typescript-eslint/ban-types
		type UserAttributes = {
			username : string;
		};
	}
}


// THIS IS IMPORTANT!!!
export {};