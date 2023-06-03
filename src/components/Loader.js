import React from 'react';
import spinner from "../gif/Spinner.gif"
const Loader = () => {
    return (
        <div>
            <img src={spinner} alt='spinner' />
            <h1>Loading...</h1>
        </div>
    );
};

export default Loader;