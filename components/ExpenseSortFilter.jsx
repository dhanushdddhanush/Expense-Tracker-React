import { useState, useEffect } from "react";

const ExpenseSortFilter = ({ data, setFilteredData }) => {
  const [sortType, setSortType] = useState("");
  const [filterTerm, setFilterTerm] = useState("");
 
  useEffect(() => {
    applyFilterAndSort(data, filterTerm, sortType);
  }, [data, filterTerm, sortType]);

  const handleSort = (e) => {
    setSortType(e.target.value);
  };

  const handleFilter = (e) => {
    setFilterTerm(e.target.value);
  };

  const applyFilterAndSort = (dataList, filterCategory, sortType) => {
    let filteredData = [...dataList];

    if (filterCategory) {
      filteredData = filteredData.filter((item) =>
        item.category.toLowerCase().includes(filterCategory.toLowerCase())
      );
    }
    if (sortType === "amount") {
      filteredData.sort((a, b) => b.amount - a.amount);
    }

    setFilteredData(filteredData);
  };

  return (
    <div>
      <select name="sort" id="sort" value={sortType} onChange={handleSort}>
      <option value="">Sort By Amount</option>
        <option value="">None</option>
        <option value="amount">Amount</option>
      </select>

      
      <select name="filter" id="filter" value={filterTerm} onChange={handleFilter}>
      <option value="">Filtert by Category</option>
        <option value="">None</option>
        <option value="food">Food</option>
        <option value="transport">Transport</option>
        <option value="entertainment">Entertainment</option>
      </select>
    </div>
  );
};

export default ExpenseSortFilter;
