import React from "react";

const SearchForm = ({ onChangeHandler, onSubmitHandler, enterKeyHandler }) => {
  return (
    <form
      onSubmit={onSubmitHandler}
      className="mx-auto max-w-2xl bg-primary py-8 px-12 rounded-lg m-12 flex justify-center"
    >
      <input
        onChange={onChangeHandler}
        onKeyDown={enterKeyHandler}
        className="px-3 py-2 w-full font-semibold placeholder-gray-500 text-black rounded-l-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2 outline-none"
        type="search"
        placeholder="search images"
      />
      <button
        type="submit"
        className="bg-secondary-1 w-32 py-2 px-3 ring-2 ring-secondary-1 uppercase rounded-r-2xl text-primary font-bold active:bg-secondary-2 active:ring-secondary-2"
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;
