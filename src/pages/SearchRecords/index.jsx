import React, { useState } from "react";
import axios from "axios";
import DataTable from "../../components/DataTable";
import FormDrawer from "../../components/Drawer";
import Pagination from "../../components/Pagination";
import Footer from "../../components/Footer";

const SearchRecordsPage = () => {
  const initialState = {
    fname: "",
    mname: "",
    lname: "",
    nat: "",
  };
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [itemPerPage, setitemPerPage] = useState(6);
  const [query, setQuery] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [error, setError] = useState(false);
  const searchData = data.map((item) => (
    <tr key={item.query_id}>
      <td>{item.name}</td>
      {item.descriptions.map((des) => (
        <td>{des.description1}</td>
      ))}
      <td>{item.nat}</td>
      <td>{item.places_of_birth[0]}</td>
      <td>{item.score}</td>
    </tr>
  ));
  const LastPostIndex = currentPage * itemPerPage;
  const firstPostIndex = LastPostIndex - itemPerPage;
  const currentPosts = searchData.slice(firstPostIndex, LastPostIndex);
  function handleClose() {
    setQuery(initialState);
    handleDrawerClose();
  }
  function handleDrawerClose() {
    setIsDrawerOpen(false);
  }
  
  function handleSubmit(e){
    e.preventDefault();
    if (query.fname === '' && query.mname === '' && query.lname === '' && query.nat === '') setError(true)
    setLoading(true);
    const payload = {
      fname: query.fname,
      mname: query.mname,
      lname: query.lname,
      nat: query.nat,
    };
    return  axios
      .post(
        "http://150.230.49.47:8080/api/v1/integration/focal/screen/individual",
        payload
      )
      .then((response) => {
        console.log("respData", response.data);
        setData(response.data.screen_result);
        setLoading(false);
        setQuery(initialState);
        setIsDrawerOpen(false);
        setError(false)
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };
  function handleDrawerOpen() {
    setIsDrawerOpen(true);
  }

  function toggleDrawer() {
    setIsDrawerOpen((prevState) => !prevState);
  }
  return (
    <>
      <div className="container">
        <div className="col-md-12 mt-3 mb-3">
          <h1 className="mb-3">Search Record Page</h1>
          <h3>please fill the form to get the serach result</h3>
          <button
            className="btn bg-secondary text-light w-50"
            onClick={handleDrawerOpen}
          >
            Search Form
          </button>
        </div>
        <hr />
        <div className="col-md-12">
          {loading ? (
            <h1 className="text-center">Loading....</h1>
          ) : data.length ? (
            <>
              <DataTable searchData={currentPosts} />
              <Pagination
                totalPosts={searchData.length}
                itemPerPage={itemPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              />
            </>
          ) : (
            <h3 className="text-center">No Data to show yet</h3>
          )}
        </div>
        <FormDrawer
          isDrawerOpen={isDrawerOpen}
          handleDrawerClose={handleDrawerClose}
          toggleDrawer={toggleDrawer}
          handleSubmit={handleSubmit}
          query={query}
          setQuery={setQuery}
          loading={loading}
          handleClose={handleClose}
          error={error}
        />
      </div>
      <Footer />
    </>
  );
};

export default SearchRecordsPage;
