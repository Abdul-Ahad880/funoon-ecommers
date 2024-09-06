import React, {useState} from 'react'

const Filter = () => {
    const [filters, setFilters] = useState({
        availability: "",
        price: "",
        sortBy: "",
      });
    
      const handleFilterChange = (e) => {
        setFilters({
          ...filters,
          [e.target.name]: e.target.value,
        });
      };
  return (
    <div className="row my-4 justify-content-center">
    <div className="col-md-8 col-lg-7 col-sm-10 mb-4">
      <form className="form-inline d-flex justify-content-between align-items-center mb-4">
        <div className="form-group mr-3">
          <label htmlFor="availability" className="mr-2">
            Availability
          </label>
          <select
            className="form-control"
            id="availability"
            name="availability"
            value={filters.availability}
            onChange={handleFilterChange}
          >
            <option value="">All</option>
            <option value="in-stock">In Stock</option>
            <option value="out-of-stock" disabled>Out of Stock</option>
          </select>
        </div>
        <div className="form-group mr-3">
          <label htmlFor="price" className="mr-2">
            Price
          </label>
          <select
            className="form-control"
            id="price"
            name="price"
            value={filters.price}
            onChange={handleFilterChange}
          >
            <option value="">All</option>
            <option value="low-to-high">Low to High</option>
            <option value="high-to-low">High to Low</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="sortBy" className="mr-2">
            Sort By
          </label>
          <select
            className="form-control"
            id="sortBy"
            name="sortBy"
            value={filters.sortBy}
            onChange={handleFilterChange}
          >
            <option value="">Default</option>
            <option value="popular">Popular</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Filter
