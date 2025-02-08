'use client';
import Link from "next/link";
import useSWR from "swr";

interface User {
    id: number;
    name: string;
    email: string;
    deleted: boolean;
}

const fetchUsers = (url: string) => fetch(url).then((res) => res.json());

export default function UsersList() {

    const { data, error } = useSWR<User[]>('/api/users', fetchUsers);

    const isLoading = !data && !error;


    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (data?.length === 0) {
        return <div>There are no users</div>
    }

    return (
        <table className="table-auto border-collapse border border-black">
            <thead>
                <tr>
                    <th className="border border-black px-5">ID</th>
                    <th className="border border-black px-5">Name</th>
                    <th className="border border-black px-5">Email</th>
                </tr>
            </thead>
            <tbody>
                {data?.map(user => (
                    <tr key={user.id}>
                        <td className="border border-black text-center">{user.id}</td>
                        <td className="border border-black text-center">
                            <Link href={`/users/${user.id}`}>{user.name}</Link >
                        </td>
                        <td className="border border-black text-center">{user.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}