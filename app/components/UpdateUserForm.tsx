'use client'
import { useForm } from "react-hook-form";
import useUser from "../hooks/useUser";
import { useState } from "react";
import UserForm from "./UserForm";

interface FormValues {
    name: string;
    email: string;
}

interface UpdateUserFormProps {
    userId: string;
}

async function updateUser(url: string, { arg }: { arg: FormValues }) {
    const res = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(arg),
    });

    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || 'Error updating user');
    }
    return res.json();
}

export default function UpdateUserForm({ userId }: UpdateUserFormProps) {

    const { user, error, isLoading } = useUser(userId);

    if (error) {
        return <div>Error loading user</div>
    }

    if (isLoading) {
        return <div>Loading...</div>
    }

    const reactHookFormMethods = useForm<FormValues>({
        defaultValues: {
            name: user?.name,
            email: user?.email
        }
    });

    const apiUrl = `/api/users/${userId}`;

    // per gestire isMutating dal componente figlio UserForm
    const [isMutating, setIsMutating] = useState(false);

    function handleIsMutatingChange(newValue: boolean) {
        setIsMutating(newValue);
    }

    return (
        <>
            <UserForm reactHookFormMethods={reactHookFormMethods} apiUrl={apiUrl} fetcher={updateUser} onIsMutatingChange={handleIsMutatingChange}>
                <button type="submit" disabled={isMutating}>
                    {isMutating ? 'Updating user...' : 'Update user'}
                </button>
            </UserForm>
        </>
    );

}
