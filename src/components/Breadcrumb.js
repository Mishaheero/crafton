import React from "react";
import { Link, useLocation } from "react-router-dom"; // Importing Link for navigation and useLocation to access current URL

// Breadcrumb component receives an array of items as props
const Breadcrumb = ({ items }) => {
  // useLocation hook gives access to the current location object, which contains the URL path
  const location = useLocation();

  // Extracting the current pathname from the location object
  const currentPath = location.pathname;

  // Filtering the breadcrumb items based on the current path
  const filteredItems = items.filter(
    (item) => currentPath.includes(item.path) || item.path === "/"
  );

  return (
    <nav aria-label="breadcrumb"> 
      <ol className="flex text-gray-500">
        {filteredItems.map((item, index) => ( // Iterating over filtered items to render each breadcrumb link
          <li key={index} className="flex items-center">
            {index !== 0 && ( // Render a separator for items after the first one
              <span className="mx-2">
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
                  <path
                    d="M1 1L7 7L1 13" 
                    stroke="#C2CFD6" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            )}
            {item.icon && item.label === "Home" ? ( // If the item has an icon and is labeled "Home"
              <span className="flex items-center">
                <Link to={item.path} className="text-darkBlue-400"> 
                  {item.icon} 
                </Link>
              </span>
            ) : item.path ? ( // If the item has a path (link)
              <Link to={item.path} className="text-xs text-darkBlue-400"> 
                {item.label} 
              </Link>
            ) : (
              <span className="text-darkBlue-400">{item.label}</span> 
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
