'use client';
import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";
import { useEffect } from "react";
import { UseFormReturn } from "react-hook-form";
import useSWRMutation, { SWRMutationResponse } from "swr/mutation";

interface UserFormValues {
    name: string;
    email: string;
}

interface User {
    id: number,
    name: string,
    email: string,
    deleted: boolean
}

interface userDataType {
    success: boolean,
    user: User,
}

interface UserFormProps {
    children: React.ReactNode;
    reactHookFormMethods: UseFormReturn<UserFormValues>;
    apiUrl: string,
    fetcher: (url: string, { arg }: { arg: UserFormValues; }) => Promise<userDataType>;
    onIsMutatingChange: (newValue: boolean) => void;
}

export default function UserForm({ children, reactHookFormMethods, apiUrl, fetcher, onIsMutatingChange }: UserFormProps) {

    const { register, formState: { errors }, handleSubmit } = reactHookFormMethods;

    const { trigger, error: mutationError, isMutating } = useSWRMutation(apiUrl, fetcher);

    const router = useRouter();


    useEffect(() => {
        onIsMutatingChange(isMutating);
    }, [isMutating]);


    async function onSubmit(formData: UserFormValues) {

        try {

            // il trigger invia i dati al server e restituisce l'utente creato (userData)
            const userData = await trigger(formData);

            console.log(userData);

            router.refresh();

            console.log(userData);

            if (userData.success && userData.user.id) {
                router.push(`/users/${userData.user.id}`);
            }

        } catch (error: any) {
            // mutationError gestisce l'errore
            console.error(error.message);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    {...register('name', {
                        required: {
                            value: true,
                            message: 'Name is required'
                        },
                        minLength: {
                            value: 2,
                            message: 'Name must be at least 2 character'
                        },
                        maxLength: {
                            value: 50,
                            message: 'Name must be at most 50 characters'
                        }
                    })}
                    className={`border rounded border-black focus:outline-none focus:shadow-outline ${errors.name ? 'border-red-500' : ''}`}
                />

                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id="email"
                    {...register('email', {
                        required: {
                            value: true,
                            message: 'Email is required'
                        },
                        maxLength: {
                            value: 50,
                            message: 'Email must be at most 50 characters'
                        },
                        pattern: {
                            value: /^\S+@\S+$/i,
                            message: 'Enter a valid email'

                        }
                    })}
                    className={`border rounded border-black focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''}`}
                />

                <div>
                    {children}
                </div>

            </form>

            {errors.name && <p>{errors.name?.message}</p>}
            {errors.email && <p>{errors.email?.message}</p>}

            {mutationError && (
                <div>
                    <h3>DB Response</h3>
                    <h2>Error</h2>
                    <p>{mutationError.message}</p>
                </div>
            )}
        </>
    )
}