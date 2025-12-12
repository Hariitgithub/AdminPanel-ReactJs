import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";
import { search } from "../../assets/img";

export const GlobalFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);
  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 1000);
  return (
    // <span className="d-flex align-items-center justify-content-end">
    //   <p className="px-2">Search :</p>{" "}
    //   <input
    //     className="form-control ml-2 w-auto p-2 py-1"
    //     value={value || ""}
    //     onChange={(e) => {
    //       setValue(e.target.value);
    //       onChange(e.target.value);
    //     }}
    //     placeholder=""
    //   />
    // </span>
    // <div class="w-50 position-relative">
    <div className="position-relative">
      {/* <div class="add-food-section bg-transparent">
        <input
          type="text"
          name="location"
          value={value || ""}
          onChange={(e) => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
          class="form-control ps-5"
          placeholder="Search..."
        />
      </div>
      <div style={{ position: "absolute", top: "30px", left: "34px" }}>
        <svg
          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="SearchIcon"
        >
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
        </svg>
      </div> */}
      <div className="d-flex align-items-center ps-2 border-search">
        <img src={search} alt="" className='search-icon' />
        <input type="text"
          name="location"
          value={value || ""}
          onChange={(e) => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
       placeholder='Search here....' className=' cust-btn ps-2 mb-1 white' />
      </div>
    </div>
  );
};
