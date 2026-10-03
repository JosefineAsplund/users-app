export const getUsers = async () => {
    const res = await fetch(
        "https://api-userapi.onrender.com/api/users/getUsers",
        {
            headers: {
                "x-api-key": "elev-hemlighet-2026",
            },
        },
    );

    if (!res.ok) {
        throw new Error("Failed to fetch users");
    }

    const data = await res.json();

    return data;
};
