// import { IRegisterUser } from "@/components/Types/auth.type";
"use server"

import { cookies } from "next/headers";
import { RegisterFormData } from "../_components/schema/register.schema";

export const registerAction = async(payload: RegisterFormData) => {
    try{
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/register`,
            {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                credentials: "include",
                body: JSON.stringify(payload)
            }
        );

        const result = await res.json();

        if(!res.ok) {
            throw new Error(result.message || "Registration failed")
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    catch(err: any) {
       console.log(err.message);
    }
} 