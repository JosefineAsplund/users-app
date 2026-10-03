import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../api/usersApi";

const UsersPage = () => {
    const { data } = useQuery({
        queryKey: ["users"],
        queryFn: getUsers,
    });

    console.log(data);

    return (
        <div>
            <h1>Users Page</h1>
        </div>
    );
};

export default UsersPage;
