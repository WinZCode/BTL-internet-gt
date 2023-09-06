import React from "react";
import Header from "../components/Header/Header";
import bannerImg from "../images/banner-guy.png";
import Product from "../components/Product/product";
import BannerFeature from "../components/Banner/Banner_feature";
const Featured = () => {
  return (
    <>
      <Header />
      <div className="content px-40 w-[100%] min-h-screen">
        <div className="feature">
          <BannerFeature urlImg={bannerImg} textHeading={"Featured Products"} />
          <Product />
        </div>
      </div>
    </>
  );
};

export default Featured;
