import type { AuthRequest } from 'lucia-auth/auth/request';
import { writable, type Writable } from 'svelte/store';

export const user : Writable<{user: {
    user: null;
    session: null;
} | {
    user: {
        userId: string;
    };
    session: Readonly<{
        sessionId: string;
        userId: string;
        activePeriodExpiresAt: Date;
        idlePeriodExpiresAt: Date;
        state: "idle" | "active";
    }>;
};
}|null> = writable(null);