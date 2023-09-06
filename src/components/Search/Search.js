import React from "react";
import { SearchOutlined, ShoppingOutlined } from "@ant-design/icons";
import { useState } from "react";
import MyBasket from "../MyBasket/myBasket";
const Search = () => {
  const [openBasket, setOpenBasket] = useState(false);
  return (
    <div className="flex relative">
      <div className="flex w-[30rem]">
        <SearchOutlined className="flex items-center justify-center absolute left-6 top-0 bottom-0 m-auto text-[#7a7a7a] text-2xl" />
        <input
          type="text"
          placeholder="Search product"
          className="w-full pr-8 pl-16 py-4 text-2xl border outline-none overflow-visible grow"
        />
      </div>
      <ShoppingOutlined
        className="flex justify-center items-center ml-4"
        style={{ fontSize: "2.4rem" }}
        onClick={() => setOpenBasket(true)}
      />
      {openBasket && <MyBasket closeMyBasket={setOpenBasket} />}
    </div>
  );
};

export default Search;
