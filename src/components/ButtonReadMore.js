import React from 'react';

const ButtonReadMore = ({ onClick }) => {
    return (
        <button 
            onClick={onClick} 
            className="px-6 py-3 text-xs font-medium text-white transition duration-300 bg-green-400 rounded-lg md:py-2 md:text-sm hover:bg-green-200"
        >
            Read more
        </button>
    );
};

export default ButtonReadMore;

