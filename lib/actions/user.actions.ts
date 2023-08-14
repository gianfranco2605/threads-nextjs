"use server"

import { revalidatePath } from "next/cache";
import User from "../models/user.models";
import { connectToDB } from "../mongoose";


interface Params {
    userId: string,
    username: string,
    name: string,
    bio: string,
    image: string,
    path: string,
}
// update function onboarding
export async function updatedUser({
    userId,
    username,
    name,
    bio,
    image,
    path,
}: Params): Promise<void> {
    

    try {
        connectToDB();

        await User.findOneAndUpdate(
            { id: userId },
            {
                username: username.toLowerCase(),
                name,
                bio,
                image,
                onboarded: true
            },
            // database operation that will update an existing row or insert a new one
            { upsert: true }
        );

        if(path === '/profile/edit') {
            // nextjs function 
            revalidatePath(path);
        }
    } catch(error: any) {
        throw new Error(`Failed to create/update user: ${error.message}`)
    }
};

export async function fetchUser(userId: string) {

    try {
        connectToDB();
        return await User.findOne({ id: userId })
        // .populate({
        //     path: 'communities',
        //     model: Community
        // })
    } catch (error: any) {
        throw new Error(`Failed to fetch user: ${error.message}`)
    }
}