"use server"

import { cookies } from "next/headers"

export const getAllConversation = async() => {
    const cookieStore = await cookies();

    const token = cookieStore.get("aToken")?.value;

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/conversation/all-conversations`,
        {
            headers: {
                Authorization: token!,
            },
            cache: "no-store",
        }
    );

    return res.json();
}