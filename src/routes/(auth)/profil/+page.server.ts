import { error, type Actions, redirect } from "@sveltejs/kit";
import { auth } from "$lib/server/lucia";
export const load = async ({ locals }) => {
    const user = await locals.auth.validateUser();
    if ( !user )
        return error(403 , "/login");
    return {
        user
    };
};

export const actions: Actions = {
	logout: async ({ locals }) => {
        const session = await locals.auth.validate();
        if ( !session )
            throw error(403 , "/login");
        await auth.invalidateSession(session.sessionId);
        locals.auth.setSession(null);
        throw redirect(302 , "/");

        
    }
};
