import { auth } from "$lib/server/lucia";
import { fail, type Actions } from "@sveltejs/kit";


export const actions: Actions = {
	login: async ({ request, locals }) => {
        const formDatas = await request.formData();
        const email = formDatas.get("email");
        const username = formDatas.get("username");
        const password = formDatas.get("password");
        if  ( !email  ) {
            return fail(400 , { error : {
                email , missing : true , message : "Email is required"
            } });
        }
        if ( !username  ) {
            return fail(400 , { error : {
                username , missing : true , message : "Username is required"
            } });
        }
        if ( !password  ) {
            return fail(400 , { error : {
                password  , missing : true , message : "Password is required"
            } });
        }
        const user = await auth.createUser({
            primaryKey: {
                providerId: "email",
                providerUserId: email.toString(),
                password : password.toString()
            },
            attributes: {
                email,
                username
            }
        });
        const session = await auth.createSession(user.userId);
        
        locals.auth.setSession(session);
        
        return {
            status: 200,
            body: {
                user
            }
        };
    }
};