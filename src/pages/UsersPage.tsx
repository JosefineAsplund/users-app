import { useUsers } from "../hooks/useUsers";

const UsersPage = () => {
    const { data: users, isLoading, error } = useUsers();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error occurred while fetching users.</div>;

    return (
        <div>
            <h1>Users Page</h1>
            <ul>
                {users?.map((user) => (
                    <li key={user.id}>{user.profile.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default UsersPage;
