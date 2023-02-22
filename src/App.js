import React, { useState } from "react";
import { Pagination } from "@mui/material";

import Header from "./components/header/header.component";
import SearchForm from "./components/search-form/search-form.component";
import Spinner from "./components/spinner/spinner.component";
import CardList from "./components/card-list/card-list.component";

import { api } from "./unsplash/api-init";

const App = () => {
  const [searchString, setSearchString] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);


  //track searchfield changes
  const handeSearchField = (event) => {
    setSearchString(event.target.value);
  };

  //API fetch function that takes searchString as input, and a page number
  const fetchData = async (input, pageNumber) => {
    try {
      setLoading(true);
      const result = await api.search.getPhotos({
        query: input,
        page: pageNumber,
        perPage: 20,
        orientation: "landscape",
      });
      setData(result);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  //onSubmit through button handler
  const submitSearch = (event) => {
    event.preventDefault();
    fetchData(searchString, 1);
    setCurrentPage(1);
  };

  //onSubmit through Enter Key handler
  const handleEnterKey = (event) => {
    if (event.key === "Enter") fetchData(searchString, 1);
    setCurrentPage(1);
  };

  //pagination handler takes event and value as parameters(mui documentation)
  const paginate = (event, value) => {
    setCurrentPage(value);
    fetchData(searchString, value);
  };

  return (
    <div className="bg-gray-50 h-screen w-full">
      <Header />
      <SearchForm
        onChangeHandler={handeSearchField}
        onSubmitHandler={submitSearch}
        enterKeyHandler={handleEnterKey}
      />
      {loading ? <Spinner /> : <CardList data={data} />}
      
      {//display pagination only if pages number > 1 and loading is false
      data?.response?.total_pages > 1 && !loading ? (
        <Pagination
          className="w-full flex justify-center p-6"
          shape="rounded"
          count={data?.response?.total_pages}
          onChange={paginate}
          page={currentPage}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default App;
