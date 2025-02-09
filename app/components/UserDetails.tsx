'use client';
import useUser from "@/app/hooks/useUser";
import Link from "next/link";
import UserSoftDelete from "./UserSoftDelete";

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
            <div>
                <span className="font-bold text-red-500">{user?.deleted ? 'Deleted user' : <UserSoftDelete user={user} />}</span>
            </div>
            <Link href={`/users/${user?.id}/update`} className="border rounded border-black p-2">update user</Link>
        </>
    )

}