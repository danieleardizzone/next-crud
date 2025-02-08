import useSWR from "swr";

interface User {
    id: number;
    name: string;
    email: string;
    deleted: boolean;
}

const fetchUser = (url: string) => fetch(url).then((res) => res.json());

export default function useUser(userId: string) {

    const id = parseInt(userId);

    const { data, error } = useSWR<User>(`/api/users/${id}`, fetchUser);

    const isLoading = !data && !error;

    return { user: data, error, isLoading };

}