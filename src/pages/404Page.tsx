import React from 'react';

const NotFoundPage = () => {
    return (
        <React.Fragment>
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <p>
                Please check the URL or return to the <a href="/">homepage</a>.
            </p>
        </React.Fragment>
    );
};

export default NotFoundPage;