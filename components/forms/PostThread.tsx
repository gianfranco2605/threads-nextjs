"use client"

import * as z from 'zod';
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { usePathname, useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from '@hookform/resolvers/zod';
// import { updatedUser } from "@/lib/actions/user.actions";
import { ThreadValidation } from "@/lib/validations/user";

// ts interface
interface Props {
    user: {
        id: string;
        objectId: string;
        username: string;
        name: string;
        bio: string;
        image: string;
    };
    btnTitle: string
}

function PostThread({ userId }: { userId: string }) {
    
    const router = useRouter();
    const pathname = usePathname();

    const form = useForm({
        resolver: zodResolver(ThreadValidation),
        defaultValues: {
            thread: '',
            accountId: userId
        }
    });

    const onSubmit = () => {
        // await createThreads();
        
    }
    return (
        <Form {...form}>
            <form 
                onSubmit={form.handleSubmit(onSubmit)} 
                className="flex flex-col justify-start gap-10">

                <FormField
                    control={form.control}
                    name="thread"
                    render={({ field }) => (
                        <FormItem className="flex flex-col gap-3 w-full">
                        <FormLabel className="mt-10 text-base-semibold text-light-2">
                            Content 
                        </FormLabel>
                        <FormControl>
                            <Textarea 
                                rows={14}
                                className="no-focus border border-dark-4 bg-dark-3 text-light-1"
                                {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type='submit' className='bg-primary-500'>Post Thread</Button>    
            </form>
        </Form>
    )
}

export default PostThread;