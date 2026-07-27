"use server"

import { cookies } from "next/headers"

export const createConversation = async(title: string) => {
    const cookieStore = await cookies();
    const token = cookieStore.get("aToken")?.value;

    if (!token) {
        throw new Error("Authentication token not found.");
    }

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/conversation/create-conversation`,
            {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
            body: JSON.stringify({
                title,
            }),
        }
    );

    return await res.json()
}