import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const { error } = useRouteError();
    console.log(error);

    return (
        <div>
            <h1>Sorry, I'm still learning! Looks like you've come across an error in my code :P</h1>
        </div>
    );
};

export default ErrorPage;