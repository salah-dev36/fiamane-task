import React, { useState } from "react";
import CardList from "./components/card-list/card-list.component";
import Header from "./components/header/header.component";
import SearchForm from "./components/search-form/search-form.component";
import Spinner from "./components/spinner/spinner.component";
import { api } from "./unsplash/api-init";

const App = () => {
  const [searchString, setSearchString] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handeSearchField = (event) => {
    setSearchString(event.target.value);
  };

  const fetchData = async (input) => {
    try {
      setLoading(true);
      const result = await api.search.getPhotos({
        query: input,
        page: 20,
        perPage: 20,
        orientation: "landscape",
      });
      setData(result);
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false);
    }
  };

  const submitSearch = (event) => {
    event.preventDefault();
    fetchData(searchString);
  };

  const handleEnterKey = (event) => {
    if(event.key === "Enter") fetchData(searchString)
  }
  return (
    <div className="bg-gray-50 h-screen w-full">
      <Header />
      <SearchForm
        onChangeHandler={handeSearchField}
        onSubmitHandler={submitSearch}
        enterKeyHandler={handleEnterKey}
      />
      {loading ? <Spinner /> : <CardList data={data} />}
    </div>
  );
};

export default App;
