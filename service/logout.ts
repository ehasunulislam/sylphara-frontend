"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation";

export const logout = async() => {
    const cokkieStore = await cookies();

    cokkieStore.delete("aToken");
    cokkieStore.delete("rToken");

    redirect("/login")
}