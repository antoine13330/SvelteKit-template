import { auth } from "$lib/server/lucia";
import { fail, type Actions, redirect } from "@sveltejs/kit";
export const load = async ({ locals }) => {
    const { user } = await locals.auth.validateUser();
    if  ( user )
        throw redirect(302 , "/");
    return {};
};


export const actions: Actions = {
	register: async ({ request, locals }) => {
        const formDatas = await request.formData();
        const email = formDatas.get("email")?.toString();
        const username = formDatas.get("username")?.toString();
        const password = formDatas.get("password")?.toString();
        if  ( !email  ) {
            throw fail(400 , { error : {
                email , missing : true , message : "Email is required"
            } });
        }
        if ( !username  ) {
            throw fail(400 , { error : {
                username , missing : true , message : "Username is required"
            } });
        }
        if ( !password  ) {
            throw fail(400 , { error : {
                password  , missing : true , message : "Password is required"
            } });
        }
        const user = await auth.createUser({
            primaryKey: {
                providerId: "email",
                providerUserId: email,
                password : password
            },
            attributes: {
                username
            }
        });
        const session = await auth.createSession(user.userId);
        
        locals.auth.setSession(session);
        
        return {
            status: 200,
            location: "/",
            body: {
                user
            }
        };
    }
};