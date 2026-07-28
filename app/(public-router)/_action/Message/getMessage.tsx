"use server"

import { cookies } from "next/headers"

export const getAllMessage = async(conversationId: string) => {
    const cookieStore = await cookies();

    const token = cookieStore.get("aToken")?.value;


    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/message/${conversationId}`,
        {
            headers: {
                Authorization: token!,
            },
            cache: "no-store",
        }
    );

    return res.json();
}