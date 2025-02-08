'use client';
import useUser from "@/app/hooks/useUser";

interface User {
    id: number;
    name: string;
    email: string;
    deleted: boolean;
}

interface UserDetailsProps {
    userId: string;
}

export default function UserDetails({ userId }: UserDetailsProps) {

    const { user, error, isLoading } = useUser(userId);

    if (error) {
        return <div>Error loading user</div>
    }

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <>
            <p>
                <span className="font-bold">ID</span>: {user?.id}
            </p>
            <p>
                <span className="font-bold">Name</span>: {user?.name}
            </p>
            <p>
                <span className="font-bold">Email</span>: {user?.email}
            </p>
            <p>
                <span className="font-bold text-red-500">{user?.deleted ? 'Deleted user' : ''}</span>
            </p>
        </>
    )

}