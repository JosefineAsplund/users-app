import { Link, useParams } from "react-router-dom";
import { useUsers } from "../hooks/useUsers";

const UserDetailsPage = () => {
    const { id } = useParams();
    const { data: users, isLoading, error } = useUsers();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error occurred while fetching user details.</div>;

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
        <main>
            <Link to="/">← Back to users</Link>

            <section>
                <h2>{user.profile.name}</h2>
                <p>Username: {user.username}</p>
                <p>Email: {user.profile.email}</p>
            </section>

            <section>
                <h2>Address</h2>
                <p>Street: {user.profile.address.street}</p>
                <p>City: {user.profile.address.city}</p>
                <p>Zip code: {user.profile.address.zipCode}</p>
            </section>

            <section>
                <h2>Settings</h2>
                <p>Theme: {user.settings.theme}</p>

                <h3>Notifications</h3>
                <p>
                    Email:{" "}
                    {user.settings.notifications.email ? "Enabled" : "Disabled"}
                </p>
                <p>
                    Push:{" "}
                    {user.settings.notifications.push ? "Enabled" : "Disabled"}
                </p>
            </section>
        </main>
    );
};

export default UserDetailsPage;
