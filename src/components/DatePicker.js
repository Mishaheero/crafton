import React, { useEffect, useRef, useState } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.css"; // Import styles for flatpickr
import "../styles/_customDatePicker.scss"; // Custom styles for the date picker

const CustomDatePicker = ({ selectedDate, onDateChange }) => {
  const inputRef = useRef(null); // Reference for the input element
  const [date, setDate] = useState(selectedDate); // State to store the selected date

  // Set up flatpickr and its options when the component mounts or when the `date` or `onDateChange` props change
  useEffect(() => {
    if (inputRef.current) {
      flatpickr(inputRef.current, {
        dateFormat: "d/m/Y", // Set the date format (day/month/year)
        defaultDate: date 
          ? (typeof date === "string" 
              ? new Date(date.split("/").reverse().join("-"))  // Convert date string to format YYYY-MM-DD
              : date)
          : null,
        onChange: (selectedDates) => {
          const selectedDate = selectedDates[0]; // Get the first selected date
          setDate(selectedDate); // Update local state with the selected date
          
          // Format and pass the selected date to parent component in "d/m/Y" format
          if (selectedDate) {
            const formattedDate = selectedDate.toLocaleDateString('pl-PL').replace(/\./g, '/');
            onDateChange(formattedDate); // Pass formatted date to parent via the callback
          } else {
            onDateChange(""); // If no date is selected, pass an empty string
          }
        }
      });
    }
  }, [date, onDateChange]); // Re-run when `date` or `onDateChange` changes

  // Update the local state when `selectedDate` prop changes
  useEffect(() => {
    setDate(selectedDate);
  }, [selectedDate]);

  return (
    <div className="relative w-full sm:w-[191px]">
      <input
        ref={inputRef}
        type="text"
        onChange={(e) => setDate(e.target.value)} // Update local state when user types in the input
        className="input-custom h-full px-8 py-3 sm:px-6 sm:pt-4 sm:pb-3 border text-xs sm:text-sm rounded-3xl text-black-100 w-full sm:w-[191px]"
        placeholder="Date" // Placeholder for the input field
      />
      <svg
        className="chevron-down-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
      >
        <path
          d="M15.6667 7.5L10.6667 12.5L5.66667 7.5"
          stroke="#4B5563"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default CustomDatePicker;
