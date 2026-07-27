"use server"

import { cookies } from "next/headers"

export const createChat = async(conversationId: string, message: string) => {
    const cookieStore = await cookies();
    const token = cookieStore.get("aToken")?.value;

    if (!token) {
        throw new Error("Authentication token not found.");
    }

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/ai/chat`,
            {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
            body: JSON.stringify({
                conversationId,
                message
            }),
        }
    );

    return await res.json()
}