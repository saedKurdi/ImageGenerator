import React, { useState } from "react";
import { SearchForm } from "./styles";
import { Buttonn } from "../Button/styles";

export default function Searchbar({ bindHits }) {
  const [searchQuery, setSearchQuery] = useState("");

  const onChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <SearchForm
      onSubmit={(e) => {
        e.preventDefault();
        bindHits(searchQuery);
      }}
    >
      <input
        onChange={onChange}
        value={searchQuery}
        placeholder="Search Images"
      />
      <Buttonn type="submit">Search</Buttonn>
    </SearchForm>
  );
}
