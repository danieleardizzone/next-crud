import UserDetails from "@/app/components/UserDetails";

type ParamsType = Promise<{ id: string }>

export default async function Page(props: { params: ParamsType }) {

    const { id } = await props.params;

    return (
        <>
            <UserDetails userId={id} />
        </>
    );
};