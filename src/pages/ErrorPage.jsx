import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const { error } = useRouteError();

    return (
        <div>
            <h1>Sorry, I'm still learning! Looks like you've come across an error in my code :P</h1>
            <p>{error.message}</p>
        </div>
    );
};

export default ErrorPage;