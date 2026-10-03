import { Route, Routes } from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import UserDetailsPage from "./pages/UserDetailsPage";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<UsersPage />} />
                <Route path="/users/:id" element={<UserDetailsPage />} />
            </Routes>
        </div>
    );
};

export default App;
