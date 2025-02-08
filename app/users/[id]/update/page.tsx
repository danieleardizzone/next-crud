import UpdateUserForm from "@/app/components/UpdateUserForm";

type ParamsType = Promise<{ id: string }>

export default async function Page(props: { params: ParamsType }) {

    const { id } = await props.params;

    return (
        <UpdateUserForm userId={id} />
    );
};