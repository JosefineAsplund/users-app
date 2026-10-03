import { useQuery } from "@tanstack/react-query";
import { getUsers } from "./api/usersApi";

const App = () => {
    const { data } = useQuery({
        queryKey: ["users"],
        queryFn: getUsers,
    });

    console.log(data);
};

export default App;
