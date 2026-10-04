import { Route, Routes } from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import UserDetailsPage from "./pages/UserDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<UsersPage />} />
            <Route path="/users/:id" element={<UserDetailsPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};

export default App;
