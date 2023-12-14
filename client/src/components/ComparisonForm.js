import React, { useState } from "react";

const ComparisonForm = ({ onCompare }) => {
  const [searchTerm, onSearchTermChange] = useState("");

  const [formData, setFormData] = useState({
    search_term: "",
    filter: "none",
    topN: 3,
    comparisonWebsites: ["Amazon", "Flipkart", "Snapdeal", "Alibaba"],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    const updatedWebsites = checked
      ? [...formData.comparisonWebsites, name]
      : formData.comparisonWebsites.filter((site) => site !== name);
    setFormData({ ...formData, comparisonWebsites: updatedWebsites });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCompare(formData);
  };

  return (
    <div id="products" className="flex items-center justify-center w-full">
      <div className="flex items-center justify-start w-full flex-col gap-20 p-10 md:p-20">
        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex items-center justify-center w-full gap-4">
            <input
              type="text"
              id="searchTerm"
              name="search_term"
              placeholder="Search Term"
              required
              maxLength="20"
              onChange={(e) => onSearchTermChange(e.target.value)}
              value={searchTerm}
              className="rounded-full bg-transparent border border-white focus:border-lightGreen focus:ring-0"
            />

            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="px-6 py-2 mb-4 bg-lightGreen rounded-full"
              >
                Search
              </button>
            </div>
          </div>

          <label htmlFor="filter">Filter:</label>
          <select
            id="filter"
            name="filter"
            onChange={handleChange}
            value={formData.filter}
            className="rounded-full bg-transparent border border-white focus:border-lightGreen focus:ring-0"
          >
            <option value="none">None</option>
            <option value="highestPrice">Highest Price</option>
            <option value="lowestPrice">Lowest Price</option>
            <option value="highestRating">Highest Rating</option>
          </select>

          <label htmlFor="topN">Top N:</label>
          <input
            type="number"
            id="topN"
            name="topN"
            min="1"
            onChange={handleChange}
            value={formData.topN}
            className="rounded-full bg-transparent border border-white focus:border-lightGreen focus:ring-0"
          />

          <label>Comparison Websites:</label>
          <div>
            <label>
              <input
                type="checkbox"
                name="Amazon"
                checked={formData.comparisonWebsites.includes("Amazon")}
                onChange={handleCheckboxChange}
                className="rounded-full"
              />
              Amazon
            </label>
            <label>
              <input
                type="checkbox"
                name="Flipkart"
                checked={formData.comparisonWebsites.includes("Flipkart")}
                onChange={handleCheckboxChange}
                className="rounded-full"
              />
              Flipkart
            </label>
            <label>
              <input
                type="checkbox"
                name="Snapdeal"
                checked={formData.comparisonWebsites.includes("Snapdeal")}
                onChange={handleCheckboxChange}
                className="rounded-full"
              />
              Snapdeal
            </label>
            <label>
              <input
                type="checkbox"
                name="Alibaba"
                checked={formData.comparisonWebsites.includes("Alibaba")}
                onChange={handleCheckboxChange}
                className="rounded-full"
              />
              Alibaba
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ComparisonForm;