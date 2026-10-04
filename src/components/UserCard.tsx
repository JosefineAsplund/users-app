import { Link } from "react-router-dom";
import type { User } from "../types/User";
import { ChevronRight } from "lucide-react";

type UserCardProps = {
    user: User;
};

const UserCard = ({ user }: UserCardProps) => {
    return (
        <article
            className="
    flex h-full flex-col rounded-xl border border-zinc-200
    bg-white p-6   shadow-lg shadow-indigo-500/20
    transition duration-200
    hover:-translate-y-1 hover:shadow-lg
  "
        >
            <div className="mb-2 flex items-baseline justify-between gap-4">
                <h2 className="text-xl font-semibold text-zinc-900">
                    {user.profile.name}
                </h2>

                <span className="text-sm text-zinc-500">@{user.username}</span>
            </div>

            <p className="mb-6 text-sm text-zinc-600">{user.profile.email}</p>

            <Link
                to={`/users/${user.id}`}
                className="flex
      mt-auto font-medium text-indigo-700
      hover:text-indigo-400
      focus-visible:outline-none
      focus-visible:ring-2 focus-visible:ring-indigo-500
      focus-visible:ring-offset-2
    "
            >
                View more details{" "}
                <ChevronRight
                    size={17}
                    className="translate-y-1.5"
                    aria-hidden="true"
                />
            </Link>
        </article>
    );
};

export default UserCard;
