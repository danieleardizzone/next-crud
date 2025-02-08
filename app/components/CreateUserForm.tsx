'use client';
import { useForm } from 'react-hook-form';
import UserForm from '@/app/components/UserForm';
import { useState } from 'react';

interface FormValues {
    name: string;
    email: string;
}

async function createUser(url: string, { arg }: { arg: FormValues }) {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(arg),
    });

    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || 'Error creating user');
    }
    return res.json();
}


export default function CreateUserForm() {

    const reactHookFormMethods = useForm<FormValues>({
        defaultValues: {
            name: '',
            email: ''
        }
    });




    // trigger è la funzione che invia i dati
    // mutationError è la funzione che si occupa del recupero degli errori della risposta
    // isMutating è la funzione che si occupa di capire se c'è una funzione remota in corso
    // const { trigger, error: mutationError, isMutating } = useSWRMutation('/api/users', createUser);

    const apiUrl = '/api/users';


    // per gestire isMutating dal componente figlio UserForm
    const [isMutating, setIsMutating] = useState(false);

    function handleIsMutatingChange(newValue: boolean) {
        setIsMutating(newValue);
    }


    return (
        <>
            <UserForm reactHookFormMethods={reactHookFormMethods} apiUrl={apiUrl} fetcher={createUser} onIsMutatingChange={handleIsMutatingChange}>
                <button type="submit" disabled={isMutating}>
                    {isMutating ? 'Adding user...' : 'Add user'}
                </button>
            </UserForm>
        </>
    );
}
