import { NavLink, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
    // This component is used to display a 404 error page when the user tries to access a route that does not exist.
    const error = useRouteError();
    console.error(error);
    
    return (
        <div>
        {/* <h1>404</h1>
        <p>Page not found!</p> */}
        <h1>Oops! Sorry, an unexpected error has occurred.</h1>
        {error && <p>{error.data}</p>}
        <NavLink to="/">
            {/* <button className="btn btn-primary">Back to Home</button> */}
            <button>Back to Home</button>
        </NavLink>
        </div>
    );
}