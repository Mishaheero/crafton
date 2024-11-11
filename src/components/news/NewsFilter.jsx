import React, { useState, useEffect } from "react";
import ButtonReadMore from "../buttons/ButtonReadMore";
import ButtonPrimary from "../buttons/ButtonPrimary";
import DatePicker from "../forms/DatePicker";
import LazyImage from "../LazyImage"; 
import EntryAnimation from "../EntryAnimation";
import "../../styles/_elements.scss";
import "../../styles/_form.scss";

const NewsFilter = () => {
  const [news, setNews] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);

  // Use useEffect to fetch data
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const agricultureResponse = await fetch(`${process.env.PUBLIC_URL}/data/agriculture.json`);
        const agriTechResponse = await fetch(`${process.env.PUBLIC_URL}/data/agri-tech.json`);
        const farmingResponse = await fetch(`${process.env.PUBLIC_URL}/data/farming.json`);
  
        if (
          agricultureResponse.ok &&
          agriTechResponse.ok &&
          farmingResponse.ok
        ) {
          const agricultureData = await agricultureResponse.json();
          const agriTechData = await agriTechResponse.json();
          const farmingData = await farmingResponse.json();
  
          if (agricultureData && agriTechData && farmingData) {
            const allNews = [...agricultureData, ...agriTechData, ...farmingData];
            setNews(allNews);
            setFilteredNews(allNews);
          } else {
            console.error("Dane w plikach JSON są puste.");
          }
        } else {
          console.error("Błąd podczas pobierania danych", agricultureResponse.status, agriTechResponse.status, farmingResponse.status);
        }
      } catch (error) {
        console.error("Wystąpił błąd podczas pobierania danych:", error);
      }
    };
  
    fetchNews();
  }, []);

  // Function to parse the date in the "DD/MM/YYYY" format
  const parseDate = (dateString) => {
    const [day, month, year] = dateString.split("/");
    return new Date(`${year}-${month}-${day}`);
  };

  // Function to apply filters
  const applyFilters = (category, search, date, sort) => {
    let filtered = news;

    // Filter by category if specified
    if (category) {
      filtered = filtered.filter(
        (newsItem) => newsItem.category.toLowerCase() === category.toLowerCase()
      );
    }

    // Filter by search term if specified
    if (search) {
      filtered = filtered.filter((newsItem) => {
        const searchLower = search.toLowerCase();
        return (
          newsItem.title.toLowerCase().includes(searchLower) ||
          newsItem.description.toLowerCase().includes(searchLower) ||
          newsItem.category.toLowerCase().includes(searchLower) ||
          newsItem.date.toLowerCase().includes(searchLower)
        );
      });
    }

    // Filter by date if specified
    if (date) {
      const parsedDate = parseDate(date);
      filtered = filtered.filter((newsItem) => {
        const newsItemDate = parseDate(newsItem.date);
        return newsItemDate >= parsedDate;
      });
    }

    // Sort by date if the "sort" option is "date"
    if (sort === "date") {
      filtered = filtered.sort((a, b) => {
        const dateA = parseDate(a.date);
        const dateB = parseDate(b.date);
        return dateB - dateA;
      });
    } else if (sort === "title") {
      filtered = filtered.sort((a, b) => a.title.localeCompare(b.title));
    }

    // Update the state with the filtered news list
    setFilteredNews(filtered);
    setCurrentPage(1);
  };

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Function to handle changes in the number of items per page
  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredNews.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);

  // Handles category change and reapplies filters
  const handleCategoryChange = (e) => {
    const category = e.target.value || "";
    setSelectedCategory(category);
    applyFilters(category, searchTerm, selectedDate, sortBy);
  };

  // Handles search term change and reapplies filters
  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    applyFilters(selectedCategory, term, selectedDate, sortBy);
  };

  // Handles sort option change and reapplies filters
  const handleSortChange = (e) => {
    const sortByValue = e.target.value;
    setSortBy(sortByValue);
    applyFilters(selectedCategory, searchTerm, selectedDate, sortByValue);
  };

  // Resets all filters and shows the original news list
  const resetFilters = () => {
    setSelectedCategory("");
    setSearchTerm("");
    setSelectedDate("");
    setSortBy("");
    setFilteredNews(news);
     setCurrentPage(1);
  };

  return (
    <div>
      {/* Filter form */}
      <EntryAnimation animationType="entry-bottom">
        <form
          className="flex flex-col flex-wrap justify-between gap-5 my-12 text-xs sm:text-sm sm:flex-row lg:mb-14 lg:mt-16"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="h-auto">
            <input
              className={`px-8 py-3 sm:px-6 h-full sm:pt-4 sm:pb-3 border text-xs sm:text-sm rounded-3xl w-full sm:w-48 xl:w-[376px] text-black-100 ${
                isActive ? "border-gray-100" : "border-gray-200"
              }`}
              type="search"
              value={searchTerm}
              onChange={handleSearchChange}
              onFocus={() => setIsActive(true)}
              onBlur={() => setIsActive(false)}
              placeholder="Search"
            />
          </div>

          <select
            className="px-8 py-3 sm:px-6 sm:pt-4 sm:pb-3 border text-xs sm:text-sm rounded-3xl text-black-100 w-full sm:w-[191px]"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="" disabled>
              Category{" "}
            </option>
            <option value="">All</option>
            <option value="Agriculture">Agriculture</option>
            <option value="Agri-Tech">Agri-Tech</option>
            <option value="Farming">Farming</option>
          </select>

          {/* Date selection */}
          <DatePicker
            selectedDate={selectedDate}
            onDateChange={(date) => {
              setSelectedDate(date);
              applyFilters(selectedCategory, searchTerm, date, sortBy);
            }}
          />

          <select
            className="px-8 py-3 sm:px-6 sm:pt-4 sm:pb-3 border text-xs sm:text-sm rounded-3xl text-black-100 w-full sm:w-[191px]"
            onChange={handleSortChange}
            value={sortBy}
          >
            <option className="hidden" value="" disabled>
              Sort by
            </option>
            <option value="date">Sort by Date</option>
            <option value="title">Sort by Title</option>
          </select>

          <button
            className="px-8 py-3 text-xs font-medium transition duration-300 bg-gray-100 rounded-lg md:bg-transparent hover:text-darkBlue-400 md:text-sm xl:px-10 xl:py-4 md:hover:bg-gray-100"
            type="button"
            onClick={resetFilters}
          >
            Reset Filters
          </button>
        </form>
      </EntryAnimation>

      {/* Displaying results */}
      <div className="grid grid-cols-1 mb-10 md:mb-16 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 news-list">
        {currentItems.length > 0 ? (
          currentItems.map((newsItem, index) => (
            <EntryAnimation
              key={`${newsItem.id}-${newsItem.category}-${index}`}
              animationType="entry-bottom"
            >
              <div className="relative h-full overflow-hidden border-gray-200 rounded-3xl border-e">
                <div className="relative flex flex-col items-stretch h-full px-6 py-5 border-t border-b border-e-transparent rounded-3xl rounded-e-xl news-item">
                  <div className="relative h-[227px] w-full">
                    <LazyImage
                      className="rounded-3xl"
                      src={newsItem.image}
                      alt={newsItem.title}
                    />
                    {index === 0 && (
                      <div className="absolute top-0 right-0 z-10 px-4 py-2 m-4 bg-green-400 rounded-2xl">
                        <p className="font-normal text-white text-xxs font-sans2">
                          New
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center mt-6 mb-3">
                    <div className="px-3 py-1 bg-green-100 rounded-2xl me-2">
                      <p className="font-normal text-green-400 text-xxs font-sans2">
                        5 min read
                      </p>
                    </div>
                    <p className="text-sm font-normal text-green-400 font-sans2">
                      {newsItem.date}
                    </p>
                  </div>
                  <h3 className="mb-3 text-darkBlue-400 text-md">
                    {newsItem.title}
                  </h3>
                  <p className="mb-6 text-sm md:text-base text-black-100">
                    {newsItem.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <p className="text-sm text-green-400">by Company</p>
                    <ButtonReadMore />
                  </div>
                </div>
              </div>
            </EntryAnimation>
          ))
        ) : (
          <p>No news available with the selected filters.</p>
        )}
      </div>

      {/* Pagination */}
      <div className="flex flex-col flex-wrap items-center gap-5 md:justify-between md:flex-row md:gap-0">
        <div className="flex items-center justify-center order-1 w-full md:justify-start md:w-1/2 md:order-0">
          <label className="me-3" htmlFor="itemsPerPage">
            <span className="text-xs md:text-sm">Items per page: </span>
          </label>
          <select
            id="itemsPerPage"
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            className="pt-[13px] pb-[11px] text-xs items me-3 rounded-3xl md:text-sm"
          >
            <option value={3}>3</option>
            <option value={6}>6</option>
            <option value={9}>9</option>
          </select>
          <span className="text-xs md:text-sm">{` ${currentItems.length} of ${filteredNews.length} courses `}</span>
        </div>

        <div className="flex justify-center w-full md:justify-end pagination md:w-1/2 md:order-1 order-0">
          <div className="flex items-center pagination">
            <ButtonPrimary
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              text="Previous"
              disabled={currentPage === 1}
              className="me-0"
            />
            <div className="flex items-center mx-3 text-sm lg:mx-6">
              <div className="text-xs md:text-sm pt-[13px] pb-[11px] px-4 md:px-[18px] border rounded-full me-2">
                {currentPage}
              </div>{" "}
              <div className="text-xs md:text-sm">of {totalPages}</div>
            </div>
            <ButtonPrimary
              onClick={() =>
                handlePageChange(Math.min(totalPages, currentPage + 1))
              }
              text="Next"
              disabled={currentPage === totalPages}
              className="me-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsFilter;
