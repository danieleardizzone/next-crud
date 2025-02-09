import UserDetails from "@/app/components/UserDetails";

type ParamsType = Promise<{ id: string }>

export default async function Page(props: { params: ParamsType }) {

    const { id } = await props.params;

    return (
        <>
            <h1 className="text-2xl">
                User details
            </h1>
            <UserDetails userId={id} />
        </>
    );
};