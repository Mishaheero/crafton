import React from 'react';

const ButtonReadMore = ({ onClick }) => {
    return (
        <button 
            onClick={onClick} 
            className="px-6 py-2 text-xs font-medium text-white transition duration-300 bg-green-400 rounded-lg md:text-sm hover:bg-green-200"
        >
            Read more
        </button>
    );
};

export default ButtonReadMore;

