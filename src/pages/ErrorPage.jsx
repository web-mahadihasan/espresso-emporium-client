import { useRouteError } from "react-router";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div>
            Page load error
        </div>
    );
};

export default ErrorPage;