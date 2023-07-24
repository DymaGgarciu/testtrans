import React from "react";
import Image from "next/image";
import search from "@public/assets/icons/search.svg";
import styles from "./SearchBar.module.scss";

function SearchBar() {
  return (
    <div className={styles.SearchBar}>
      <Image src={search} alt="search-icon" />
    </div>
  );
}

export default SearchBar;
