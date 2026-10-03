import { useParams } from "react-router-dom";
import { useUsers } from "../hooks/useUsers";

const UserDetailsPage = () => {
    const { id } = useParams();
    const { data: users, isLoading, error } = useUsers();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error occurred while fetching user details.</div>;

    const user = users?.find((user) => user.id === Number(id));

    return (
        <div>
            <h1>User Details Page</h1>

            {user && (
                <div>
                    <h2>{user.profile.name}</h2>
                    <p>Email: {user.profile.email}</p>
                    <p>Phone: {user.profile.phone}</p>
                </div>
            )}
        </div>
    );
};

export default UserDetailsPage;
