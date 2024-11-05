import React from 'react';

const ButtonLogin = ({ onClick }) => {
    return (
        <button 
            onClick={onClick} 
            className="px-8 py-3 text-xs font-medium text-white transition duration-300 rounded-lg md:text-sm lg:me-0 me-3 xl:px-10 xl:py-4 bg-darkBlue-400 hover:bg-darkBlue-500"
        >
            Go to portal
        </button>
    );
};

export default ButtonLogin;

