"use server"

import { ILoginUser } from "@/components/Interface/login.interface"
import { cookies } from "next/headers";


export const loginAction = async(payload: ILoginUser) => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/login`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload)
        }
    );

    const result = await res.json();

    if (!res.ok) {
        throw new Error(result.message || "Login failed");
    }

    const cookieStore = await cookies();

    cookieStore.set("aToken", result.data.accessToken, {
        httpOnly: true,
        sameSite: "lax",
        path: "/"
    });

    cookieStore.set("rToken", result.data.refreshToken, {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
    });

    return result;
} 