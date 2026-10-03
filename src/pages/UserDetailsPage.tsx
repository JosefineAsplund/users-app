import { Link, useParams } from "react-router-dom";
import { useUsers } from "../hooks/useUsers";
import ErrorMessage from "../components/ErrorMessage";
import {
    ArrowLeft,
    Mail,
    UserRound,
    Bell,
    MapPin,
    Settings as SettingsIcon,
} from "lucide-react";

const UserDetailsPage = () => {
    const { id } = useParams();
    const { data: users, isLoading, error } = useUsers();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <ErrorMessage />;

    const user = users?.find((user) => user.id === Number(id));

    if (!user) {
        return (
            <main>
                <h1>User not found</h1>
                <p>We couldn't find a user with that ID.</p>
                <Link to="/">Back to users</Link>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-zinc-900 px-4 py-10">
            <div className="mx-auto max-w-3xl">
                <Link
                    to="/"
                    className="
          mb-6 inline-flex items-center gap-2
          font-medium text-indigo-400
          transition hover:text-indigo-300
          focus-visible:rounded-sm focus-visible:outline-none
          focus-visible:ring-2 focus-visible:ring-indigo-400
          focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900
        "
                >
                    <ArrowLeft size={18} aria-hidden="true" />
                    Back to users
                </Link>

                <article
                    className="
          rounded-xl border border-zinc-200 bg-white p-6
          shadow-lg shadow-indigo-500/20
          sm:p-8
        "
                >
                    <div className="mb-6 flex items-center gap-4 border-b border-zinc-200 pb-6">
                        <div className="rounded-full bg-indigo-100 p-3 text-indigo-600">
                            <UserRound size={28} aria-hidden="true" />
                        </div>

                        <div>
                            <h1 className="text-2xl font-bold text-zinc-900">
                                {user.profile.name}
                            </h1>

                            <p className="text-zinc-500">@{user.username}</p>
                        </div>
                    </div>

                    <div className="space-y-5">
                        <section>
                            <div className="mb-3 flex items-center gap-2">
                                <Mail
                                    size={18}
                                    className="text-indigo-500"
                                    aria-hidden="true"
                                />
                                <h3 className="font-semibold text-zinc-800">
                                    Email
                                </h3>
                            </div>

                            <p className="flex items-center gap-2 text-zinc-800">
                                {user.profile.email}
                            </p>
                        </section>
                        <section className="border-t border-zinc-200 pt-6">
                            <div className="mb-3 flex items-center gap-2">
                                <MapPin
                                    size={20}
                                    className="text-indigo-500"
                                    aria-hidden="true"
                                />
                                <h3 className="font-semibold text-zinc-800">
                                    Address
                                </h3>
                            </div>

                            <p className="text-zinc-600">
                                {user.profile.address.street},{" "}
                                {user.profile.address.zipCode}{" "}
                                {user.profile.address.city}
                            </p>
                        </section>

                        {/* Settings */}
                        <section className="border-t border-zinc-200 pt-6">
                            <div className="mb-3 flex items-center gap-2">
                                <SettingsIcon
                                    size={20}
                                    className="text-indigo-500"
                                    aria-hidden="true"
                                />
                                <h3 className="font-semibold text-zinc-800">
                                    Settings
                                </h3>
                            </div>

                            <p className="text-zinc-600">
                                <span className="font-medium text-zinc-800">
                                    Theme:
                                </span>{" "}
                                {user.settings.theme}
                            </p>

                            {/* Notifications */}
                            <div className="mt-5">
                                <div className="mb-3 flex items-center gap-2">
                                    <Bell
                                        size={18}
                                        className="text-indigo-500"
                                        aria-hidden="true"
                                    />
                                    <h3 className="font-semibold text-zinc-800">
                                        Notifications
                                    </h3>
                                </div>

                                <div className="divide-y divide-zinc-200 rounded-lg border border-zinc-200">
                                    <div className="flex items-center justify-between px-4 py-3">
                                        <span className="text-sm text-zinc-700">
                                            Email
                                        </span>

                                        <span
                                            className={`rounded-full px-3 py-1 text-xs font-medium ${
                                                user.settings.notifications
                                                    .email
                                                    ? "bg-green-100 text-green-700"
                                                    : "bg-zinc-100 text-zinc-600"
                                            }`}
                                        >
                                            {user.settings.notifications.email
                                                ? "Enabled"
                                                : "Disabled"}
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between px-4 py-3">
                                        <span className="text-sm text-zinc-700">
                                            Push
                                        </span>

                                        <span
                                            className={`rounded-full px-3 py-1 text-xs font-medium ${
                                                user.settings.notifications.push
                                                    ? "bg-green-100 text-green-700"
                                                    : "bg-zinc-100 text-zinc-600"
                                            }`}
                                        >
                                            {user.settings.notifications.push
                                                ? "Enabled"
                                                : "Disabled"}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </article>
            </div>
        </main>
    );
};

export default UserDetailsPage;
