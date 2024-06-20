"use server";

import { db } from "@/lib/db";
import { currentUser } from "@/lib/auth";
import { sendAccountTerminationEmail } from "@/lib/mail";

export const deleteAccount = async (userId: string) => {
    const user = await currentUser();
    if (!user || user.id !== userId) {
        return { error: "Unauthorized" };
    }
    try {
        await db.user.delete({
        where: { id: userId },
        });
        if (user.email) {
            await sendAccountTerminationEmail(user.email);
        }
        return { success: "Account deleted successfully." };
    } catch (error) {
        return { error: "Failed to delete the account." };
    }
};
