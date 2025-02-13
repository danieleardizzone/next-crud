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
            <h1 className="text-2xl font-bold py-5">
                User details
            </h1>
            <div className="flow-root md:w-1/2 rounded-lg border shadow-md border-card">
                <div className="text-sm sm:text-base divide-y divide-card">
                    <div className="flex p-3">
                        <div className="w-1/4 sm:w-1/2 font-bold">
                            ID
                        </div>
                        <div className="w-1/2">
                            {user?.id}
                        </div>
                    </div>

                    <div className="flex p-3">
                        <div className="w-1/4 sm:w-1/2 font-bold">
                            Name
                        </div>
                        <div className="w-1/2">
                            {user?.name}
                        </div>
                    </div>

                    <div className="flex p-3">
                        <div className="w-1/4 sm:w-1/2 font-bold">
                            Email
                        </div>
                        <div className="w-1/2">
                            {user?.email}
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-2 flex gap-5">
                <div className="rounded-2xl py-2 px-5 text-base sm:text-lg font-bold bg-btn border-2 border-btn hover:opacity-90">
                    {user?.deleted ? '' : <UserSoftDelete user={user} />}
                </div>
                <Link href={`/users/${user?.id}/update`} className="rounded-2xl py-2 px-5 text-base sm:text-lg font-bold bg-btn border-2 border-btn hover:opacity-90">
                    Update
                </Link>
            </div>
        </>

    )

}