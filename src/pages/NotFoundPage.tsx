import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <main>
            <h1>404 - Page not found</h1>
            <p>The page you're looking for doesn't exist.</p>

            <Link to="/">Back to users</Link>
        </main>
    );
};

export default NotFoundPage;
