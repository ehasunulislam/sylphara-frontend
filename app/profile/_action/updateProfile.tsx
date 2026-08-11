"use server"

import { IupdateProfile } from "@/components/Interface/updateProfile.interface";
import { cookies } from "next/headers";

export const updateProfileAction = async(payload: IupdateProfile) => {
    const cookieStore = await cookies();
    const token = cookieStore.get("aToken")?.value;

    if (!token) {
        throw new Error("No authentication token found");
    }

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/profile/me`,
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
            body: JSON.stringify(payload),
            cache: "no-store"
        }
    );

    const result = await res.json();

    if (!res.ok) {
        throw new Error(result?.message || "Profile update failed");
    }

    return result;
}