import React from "react";
import { Link, useLocation } from "react-router-dom";

// The Breadcrumb component accepts an `items` array as a prop
const Breadcrumb = ({ items }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  // We filter the breadcrumbs to match exact or parent paths
  const renderBreadcrumbs = (breadcrumbItems) => {
    return breadcrumbItems
      .filter((item) => {
        // We always appear in Home if we are on the home page or any other path
        if (item.label === "Home")
          return currentPath === "/" || currentPath.startsWith(item.path);
        return (
          currentPath === item.path || currentPath.startsWith(item.path + "/")
        );
      })
      .map((item, index) => (
        <li key={index} className="flex items-center">
          {/* Render separator for all items except the first one */}
          {index !== 0 && (
            <span className="mx-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 6L15 12L9 18"
                  stroke="#C2CFD6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          )}

          {/* Link for the Home icon or regular breadcrumb link */}
          {item.icon && item.label === "Home" ? (
            <Link
              to={item.path}
              className="flex items-center text-darkBlue-400"
            >
              {item.icon}
            </Link>
          ) : (
            <Link to={item.path} className="text-xs text-darkBlue-400">
              {item.label}
            </Link>
          )}

          {/* Rendering child breadcrumbs */}
          {item.children && currentPath.startsWith(item.path + "/") && (
            <ul>
              {item.children.map((subItem, subIndex) => (
                <li key={subIndex} className="flex items-center">
                  <span className="mx-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M9 6L15 12L9 18"
                        stroke="#C2CFD6"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <Link to={subItem.path} className="text-xs text-darkBlue-400">
                    {subItem.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ));
  };

  return (
    <nav aria-label="breadcrumb">
      <ol className="flex text-black-500">{renderBreadcrumbs(items)}</ol>
    </nav>
  );
};

export default Breadcrumb;
