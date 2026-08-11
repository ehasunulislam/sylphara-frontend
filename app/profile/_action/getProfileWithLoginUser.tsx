"use server"

import { cookies } from "next/headers"

export const getProfileWithLoginUserAction = async() => {
    const cokkieStore = await cookies();
    const token = cokkieStore.get("aToken")?.value;

    if(!token) {
        throw new Error("No authentication token found");
    }

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/profile/me`,
        {
            method: "GET",
            headers: {
                Authorization: token,
            },
            cache: "no-store"
        }

    );

    return await res.json();
}