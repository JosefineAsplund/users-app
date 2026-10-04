import NotFoundMessage from "../components/NotFoundMessage";

const NotFoundPage = () => {
    return (
        <NotFoundMessage
            label="Error 404"
            title="Page not found"
            message="The page you're looking for doesn't exist."
        />
    );
};

export default NotFoundPage;
