import UserDetails from "@/app/components/UserDetails";
import Link from "next/link";

type ParamsType = Promise<{ id: string }>

export default async function Page(props: { params: ParamsType }) {

    const { id } = await props.params;

    return (
        <>
            <h1 className="text-2xl">
                User details
            </h1>
            <UserDetails userId={id} />
            <Link href={`/users/${id}/update`} className="border rounded border-black p-2">update user</Link>
        </>
    );
};
