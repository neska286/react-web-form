import React from "react";

const SearchForm = ({
  handleSubmit,
  query,
  setQuery,
  loading,
  handleClose,
  error
}) => {
  function handleInput(ev) {
    setQuery((prevState) => ({
      ...prevState,
      [ev.target.name]: ev.target.value,
    }));
    ev.target.setCustomValidity("");
  }
  return (
    <div className="p-5">
      <form className="row" onSubmit={handleSubmit}>
        <div className="col-md-12 mb-3">
          <label className="d-flex mb-2">FirstName*</label>
          <input
            type="text"
            name="fname"
            className="form-control"
            placeholder="search..."
            onChange={handleInput}
            value={query.fname}
          />
          {error && 
                <span className='d-flex text-danger'>Please enter your firstName</span>}
        </div>
        <div className="col-md-12 mb-3">
          <label className="d-flex mb-2">MiddleName*</label>
          <input
            type="text"
            name="mname"
            className="form-control"
            placeholder="search..."
            onChange={handleInput}
            value={query.mname}
          />
          {error && 
                <span className='d-flex text-danger'>Please enter your middleName</span>}
        </div>
        <div className="col-md-12 mb-3">
          <label className="d-flex mb-2">LastName*</label>
          <input
            type="text"
            name="lname"
            className="form-control"
            placeholder="search..."
            onChange={handleInput}
            value={query.lname}
          />
          {error && 
                <span className='d-flex text-danger'>Please enter your lastName</span>}
        </div>
        <div className="col-md-12 mb-3">
          <label className="d-flex mb-2">Nationality*</label>
          <input
            type="text"
            name="nat"
            className="form-control"
            placeholder="search...."
            onChange={handleInput}
            value={query.nat}
          />
          {error && 
                <span className='d-flex text-danger'>Please enter your nationality</span>}
        </div>
        <div className="mt-5 d-flex justify-content-evenly">
          <button
            type="submit"
            className="btn bg-secondary text-light w-25"
            onClick={handleClose}
          >
            Cancel
          </button>
          <button type="submit" className="btn bg-secondary text-light w-25">
            {loading ? <>Loading..</> : <>Search</>}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
