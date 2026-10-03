import { Link } from "react-router-dom";
import type { User } from "../types/User";

type UserCardProps = {
    user: User;
};

const UserCard = ({ user }: UserCardProps) => {
    return (
        <article>
            <h2>
                {user.profile.name} ({user.username})
            </h2>

            <p>{user.profile.email}</p>

            <Link to={`/users/${user.id}`}>View details</Link>
        </article>
    );
};

export default UserCard;
