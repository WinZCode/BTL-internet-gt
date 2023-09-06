import React, { useState } from "react";
import { Button } from "antd";
// import { useRef, useEffect } from "react";
import styled from "styled-components";
import BasketItem from "./basketItem/basketItem";
import { useTranslation } from "react-i18next";
const MyBasket = ({ closeMyBasket }) => {
  const [addProduct, setAddProduct] = useState(false);
  const [close, setClose] = useState(false);
  const { t } = useTranslation();
  // const elementRef = useRef();
  // useEffect(() => {
  //   const divElement = elementRef.current;
  //   divElement.focus();
  // }, []);
  const handleClose = () => {
    closeMyBasket(false);
    setClose(true);
  };
  const Basket = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 60rem;
    height: 100vh;
    background: #fff;
    z-index: 20;
    transition: transform 0.5s cubic-bezier(0.77, 0, 0.175, 1);
    /* transform: translateX(100%); */
  `;
  return (
    <>
      <Basket tabindex="1">
        <div className="h-[100%] px-[1.6rem] pt-[1.6rem] pb-[10rem] flex flex-col ">
          <div className="header flex items-center">
            <div className="flex grow my-[1.8rem] ">
              <h3 className=" text-[#1a1a1a] font-550 flex items-end ">
                {t("others.myBasket")}
                <span className="ml-4 text-[1.2rem] text-[#4a4a4a] font-550">
                  ( 0 item )
                </span>
              </h3>
            </div>
            <div className="flex">
              <Button
                className="solid border border-[#e1e1e1] text-[1.2rem] text-black px-[1.6rem] py-[1.2rem] hover:bg-[#e0e0e0f3] hover:transition-all hover:duration-300 font-bold "
                onClick={handleClose}
              >
                {t("button.close")}
              </Button>
              <Button className="solid border border-[#e1e1e1] text-[1.2rem] text-[#4a4a4a] font-[350] px-[1.6rem] py-[1.2rem]  hover:cursor-not-allowed hover:bg-[#f3f3f3f3]">
                {t("button.clearBasket")}
              </Button>
            </div>
          </div>
          {addProduct ? (
            <>
              <div className="flex grow items-center justify-center">
                <h5 className=" text-[#818181] text-[2rem]">
                  {t("message.emptyBasket")}
                </h5>
              </div>
            </>
          ) : (
            <BasketItem deleteProduct={setAddProduct} />
          )}
        </div>
        <div className="footer absolute bottom-0 right-0 p-[1.6rem] flex items-center justify-between w-[100%] ">
          <div className="absolute top-0 content-none w-[93%] h-[0.05rem] bg-[#e1e1e1]"></div>
          <div className="">
            <p className=" text-[1.4rem] m-0 text-[#4a4a4a] leading-10 font-550  ">
              {t("field.subTotalAmount")}
            </p>
            <h2 className="basket-total-amount my-[1.2rem] text-[#1a1a1a] text-[2.6rem] font-550">
              $0.00
            </h2>
          </div>
          <Button
            className="text-[1.5rem] px-[3.2rem] py-[1.6rem] text-[#fff] flex items-center justify-center font-bold  opacity-50 hover:opacity-40 hover:cursor-not-allowed hover:transition-all hover:duration-300 "
            style={{ backgroundColor: "#101010" }}
          >
            {t("button.checkout")}
          </Button>
        </div>
      </Basket>
    </>
  );
};

export default MyBasket;
