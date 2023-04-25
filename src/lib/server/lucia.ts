import lucia from "lucia-auth";
import { sveltekit } from "lucia-auth/middleware";
import prisma from "@lucia-auth/adapter-prisma";
import { PrismaClient } from "@prisma/client";
import { dev } from "$app/environment";
const prismaClient = new PrismaClient();
export const auth = lucia({
	adapter: prisma(prismaClient),
	env: dev ? "DEV" : "PROD",
	middleware: sveltekit(),
	transformDatabaseUser: (user) => {
		return {
			userId: user.id,
			username: user.username
		};
	}
});

export type Auth = typeof auth;