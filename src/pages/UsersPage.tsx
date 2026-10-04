import { Users } from "lucide-react";
import ErrorMessage from "../components/ErrorMessage";
import LoadingMessage from "../components/LoadingMessage";
import UserCard from "../components/UserCard";
import { useUsers } from "../hooks/useUsers";

const UsersPage = () => {
    const { data: users, isLoading, error } = useUsers();

    if (isLoading) {
        return <LoadingMessage />;
    }
    if (error) return <ErrorMessage />;
    if (!users || users.length === 0) {
        return (
            <main className="min-h-screen bg-zinc-900 px-4 py-10">
                <div className="mx-auto max-w-xl rounded-xl border border-indigo-500/20 bg-zinc-800 p-6 shadow-lg">
                    <h2 className="font-semibold text-white">No users found</h2>

                    <p className="mt-1 text-sm leading-6 text-zinc-400">
                        There are currently no users to display.
                    </p>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-zinc-900 px-4 py-10">
            <div className="mx-auto max-w-6xl">
                <div className="flex items-center gap-3">
                    <Users
                        size={32}
                        className="text-indigo-400"
                        aria-hidden="true"
                    />

                    <h1 className="text-3xl font-bold text-white">
                        User Directory
                    </h1>
                </div>
                <p className="m-3 pl-8 text-sm text-zinc-400">
                    Browse users and view their details.
                </p>

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
