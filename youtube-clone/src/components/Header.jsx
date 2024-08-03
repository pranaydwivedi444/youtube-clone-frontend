import React from "react";
import SearchBox from "./SearchBox";

function Header() {
  return (
    <div className="flex  justify-between gap-10 lg:gap-20 m-2 items-center p-2">
      <div>youtube</div>
      <div>
        <SearchBox />
      </div>
      <div>upload data</div>
    </div>
  );
}

export default Header;
