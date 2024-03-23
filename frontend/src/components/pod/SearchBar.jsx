import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { Button } from 'react-bootstrap';
// import './SearchBar';

function SearchBar() {
  return (
    <div className="space">
      <input className="Search_field" type="search" placeholder="Eg:Newman's Podcast" />

      <Button variant="transperent" className="btn_Search" type="submit">
        <BsSearch />
      </Button>
    </div>
  );
}

export default SearchBar;
