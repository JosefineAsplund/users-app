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
        <main className="min-h-screen bg-zinc-900 px-4 py-10">
            <div className="mx-auto max-w-6xl">
                <h1 className="mb-8 text-3xl font-bold text-white">Users</h1>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {users.map((user) => (
                        <UserCard key={user.id} user={user} />
                    ))}
                </div>
            </div>
        </main>
    );
};

export default UsersPage;
