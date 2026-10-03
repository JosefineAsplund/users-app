import type { User } from "../types/User";

export const getUsers = async (): Promise<User[]> => {
    const res = await fetch(
        "https://api-userapi.onrender.com/api/users/getUsers",
        {
            headers: {
                "x-api-key": "elev-hemlighet-2026",
            },
        },
    );

    if (!res.ok) {
        throw new Error(
            `Failed to fetch users: ${res.status} ${res.statusText}`,
        );
    }

    const data = await res.json();

    return data;
};
