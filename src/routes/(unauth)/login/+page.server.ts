import { auth } from "$lib/server/lucia";
import { fail, type Actions, redirect } from "@sveltejs/kit";
import { LuciaError } from "lucia-auth";
export const load = async ({ locals }) => {
    const { user } = await locals.auth.validateUser();
    if  ( user )
        throw redirect(302 , "/");
    return {};
};


export const actions: Actions = {
    login: async ({ request, locals }) => {
        const formDatas = await request.formData();
        const email = formDatas.get("email")?.toString();
        const password = formDatas.get("password")?.toString();
        if (!email) {
            return fail(400, {
                error: {
                    email, missing: true, message: "Email is required"
                }
            });
        }
        if (!password) {
            return fail(400, {
                error: {
                    password, missing: true, message: "Password is required"
                }
            });
        }
        try {
            const key = auth.useKey('email', email, password);
            const session = await auth.createSession((await key).userId);
            locals.auth.setSession(session);

            console.log("has been set" ,await locals.auth.validateUser())
        } catch (e) {
            if (e instanceof LuciaError && e.message === 'AUTH_INVALID_KEY_ID') {
                return fail(400, {
                    error: {
                        message: 'Incorrect email or password',
                        email
                    }
                });
            }
            if (e instanceof LuciaError && e.message === 'AUTH_INVALID_PASSWORD') {
                return fail(400, {
                    error: {
                        message: 'Incorrect email or password',
                        email
                    }
                });
            }
            return fail(400, {
                error: {
                    message: 'An unknown error occurred',
                    email
                }
            });
        }
        throw redirect(302, '/');
    }
};