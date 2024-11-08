import React from 'react';

const ButtonPrimary = ({ onClick, text = "Go to portal", disabled = false, className = "" }) => {
    return (
        <button 
            onClick={onClick} 
            disabled={disabled}
            className={`px-8 py-3 text-xs font-medium text-white transition duration-300 rounded-lg md:text-sm lg:me-0 me-3 xl:px-10 xl:py-4 
                ${disabled ? "bg-gray-300 cursor-not-allowed" : "bg-darkBlue-400 hover:bg-darkBlue-500"} ${className}`}
        >
            {text}
        </button>
    );
};

export default ButtonPrimary;
