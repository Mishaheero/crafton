import React from "react";
import { Link, useLocation } from "react-router-dom";

// Komponent Breadcrumb przyjmuje tablicę `items` jako props
const Breadcrumb = ({ items }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Filtrujemy breadcrumby tak, by odpowiadały dokładnym lub nadrzędnym ścieżkom
  const renderBreadcrumbs = (breadcrumbItems) => {
    return breadcrumbItems
      .filter((item) => {
        // Zawsze pokazujemy Home, jeśli jesteśmy na stronie głównej lub każda inna ścieżka
        if (item.label === "Home") return currentPath === "/" || currentPath.startsWith(item.path);
        return currentPath === item.path || currentPath.startsWith(item.path + '/');
      })
      .map((item, index) => (
        <li key={index} className="flex items-center">
          {/* Render separator dla wszystkich elementów oprócz pierwszego */}
          {index !== 0 && (
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
          
          {/* Link dla ikony Home lub zwykły breadcrumb link */}
          {item.icon && item.label === "Home" ? (
            <Link to={item.path} className="flex items-center text-darkBlue-400">
              {item.icon}
            </Link>
          ) : (
            <Link to={item.path} className="text-xs text-darkBlue-400">
              {item.label}
            </Link>
          )}

          {/* Renderowanie podrzędnych breadcrumbów */}
          {item.children && currentPath.startsWith(item.path + '/') && (
            <ul>
              {item.children.map((subItem, subIndex) => (
                <li key={subIndex} className="flex items-center">
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
      <ol className="flex text-gray-500">
        {renderBreadcrumbs(items)}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
