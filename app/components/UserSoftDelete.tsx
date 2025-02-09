import useSWRMutation from "swr/mutation";

interface User {
    id: number;
    name: string;
    email: string;
    deleted: boolean
}

interface UserSoftDeleteProps {
    user: User | undefined;
}

async function deleteUser(url: string, { arg }: { arg: { deleted: boolean } }) {
    const res = await fetch(url, {
        method: 'PATCH',
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

export default function UserDelete({ user }: UserSoftDeleteProps) {

    const { trigger, error: mutationError, isMutating } = useSWRMutation(`/api/users/${user?.id}`, deleteUser);

    async function handleUserSoftDelete() {

        try {
            const result = await trigger({ deleted: true });
        } catch (err: any) {
            console.error('Error deleting user:', err.message);
        }

    }

    return (
        <button onClick={handleUserSoftDelete}>
            {isMutating ? 'Deleting...' : 'Delete'}
        </button>
    )

}