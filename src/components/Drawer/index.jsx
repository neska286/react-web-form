import React from "react";
import Drawer from "react-modern-drawer";

import "react-modern-drawer/dist/index.css";
import SearchForm from "../SearchForm";

const FormDrawer = ({
  isDrawerOpen,
  toggleDrawer,
  handleSubmit,
  query,
  setQuery,
  loading,
  handleClose,
}) => {
  return (
    <>
      <Drawer
        open={isDrawerOpen}
        onClose={toggleDrawer}
        direction="right"
        size="450px"
      >
        <h3 className="text-start mt-2 p-3">Search Form</h3>
        <SearchForm
          handleSubmit={handleSubmit}
          query={query}
          setQuery={setQuery}
          loading={loading}
          handleClose={handleClose}
        />
      </Drawer>
    </>
  );
};

export default FormDrawer;
