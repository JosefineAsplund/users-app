import ErrorMessage from "../components/ErrorMessage";
import UserCard from "../components/UsersCard";
import { useUsers } from "../hooks/useUsers";

const UsersPage = () => {
    const { data: users, isLoading, error } = useUsers();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <ErrorMessage />;
    if (!users || users.length === 0) {
        return <p>No users found.</p>;
    }

    return (
        <main>
            <h1>Users</h1>

            <div>
                {users.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </div>
        </main>
    );
};

export default UsersPage;
