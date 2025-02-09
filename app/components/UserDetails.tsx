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
            <div className="flow-root md:w-1/2 rounded-lg border shadow-md border-gray-100 dark:border-gray-700">
                <div className="text-sm sm:text-base divide-y divide-gray-100 dark:divide-gray-700">
                    <div className="flex p-3">
                        <div className="w-1/4 sm:w-1/2 font-bold text-gray-900 dark:text-white">
                            ID
                        </div>
                        <div className="w-1/2 text-gray-700 dark:text-gray-200">
                            {user?.id}
                        </div>
                    </div>

                    <div className="flex p-3">
                        <div className="w-1/4 sm:w-1/2 font-bold text-gray-900 dark:text-white">
                            Name
                        </div>
                        <div className="w-1/2 text-gray-700 dark:text-gray-200">
                            {user?.name}
                        </div>
                    </div>

                    <div className="flex p-3">
                        <div className="w-1/4 sm:w-1/2 font-bold text-gray-900 dark:text-white">
                            Email
                        </div>
                        <div className="w-1/2 text-gray-700 dark:text-gray-200">
                            {user?.email}
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-2 flex gap-5">
                <div className="rounded-2xl py-2 px-5 text-base sm:text-lg font-bold bg-red-500 hover:bg-red-500/90 hover:text-neutral-200">
                    {user?.deleted ? '' : <UserSoftDelete user={user} />}
                </div>
                <Link href={`/users/${user?.id}/update`} className="rounded-2xl py-2 px-5 text-base sm:text-lg font-bold bg-sky-500 hover:bg-sky-500/90 hover:text-neutral-200">
                    Update
                </Link>
            </div>
        </>

    )

}