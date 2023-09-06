import React, { useState } from "react";
import styled from "styled-components";
import { PlusOutlined, MinusOutlined, CloseOutlined } from "@ant-design/icons";
import { dataMyBasket } from "../../data/dataMyBasket";
const basketItem = ({ deleteProduct }) => {
  // const [listItem, setListItem] = useState(dataMyBasket);
  const BasketItem = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #e1e1e1;
    margin-bottom: 1.2rem;
    transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
    animation: slide-up 0.5s ease;
  `;
  const Button = styled.button`
    font-size: 1.2rem;
    border: 1px solid #e1e1e1;
    color: #4a4a4a;
    background: transparent;
  `;
  const BasketProduct = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 1.2rem;
  `;
  const handleDeleteProduct = (item) => {
    if (item === 0) {
      deleteProduct(true);
    }
  };
  return (
    <div>
      {dataMyBasket.map((item) => {
        return (
          <BasketItem key={item.id}>
            <div className="w-[3rem] h-[9rem] flex item-center flex-col text-[1.5rem]">
              <Button className="w-[3.5rem] h-[100%] p-[0.5rem] hover:bg-[#e0e0e0f3] hover:transition-all  ">
                <PlusOutlined />
              </Button>
              <Button className="w-[3.5rem] h-[100%] p-[0.5rem] hover:bg-[#e0e0e0f3] hover:cursor-not-allowed hover:transition-all ">
                <MinusOutlined />
              </Button>
            </div>
            <BasketProduct className="">
              <div className="w-[9rem] h-[9rem] mr-[1.6rem] relative">
                <img
                  className="w-[100%] h-[100%] object-contain absolute"
                  src={item.link}
                  alt=""
                />
              </div>
              <div className="grow ">
                <a className="underline" href="#">
                  <h4
                    className="my-[1.2rem]  w-[14.2rem] whitespace-nowrap overflow-hidden text-ellipsis relative text-[@1a1a1a1] font-bold leading-[1.9rem] text-[1.6rem]
    "
                  >
                    {item.name}
                  </h4>
                </a>
                <div className="flex flex-row ">
                  <div className="w-[33.33333%]">
                    <span className="text-[1.3rem] text-[#8d8d8d] font-bold mb-[0.5rem]">
                      Quantity
                    </span>
                    <h5 className="text-[1.3rem] text-[#1a1a1a] font-bold">
                      {item.quantity}
                    </h5>
                  </div>
                  <div className="w-[33.33333%]">
                    <span className="text-[1.3rem] text-[#8d8d8d] font-bold mb-[0.5rem]">
                      Size
                    </span>
                    <h5 className="text-[1.3rem] text-[#1a1a1a] font-bold">
                      {item.size}
                    </h5>
                  </div>
                  <div className="w-[33.33333%]">
                    <span className="text-[1.3rem] text-[#8d8d8d] font-bold mb-[0.5rem]">
                      Color
                    </span>
                    <div
                      className={`${item.color} w-[1.5rem] h-[1.5rem] rounded-[50%]`}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="mr-[2rem]">
                <h4 className="text-black font-bold text-[1.7rem]  ">
                  ${item.total}
                </h4>
              </div>
              <Button
                className="py-[1.4rem] px-[1.3rem] hover:bg-[#e0e0e0f3] hover:transition-all  "
                type="button"
                onClick={() => handleDeleteProduct(item.id)}
              >
                <span className="text-[1.5rem] flex items-center">
                  <CloseOutlined />
                </span>
              </Button>
            </BasketProduct>
          </BasketItem>
        );
      })}
    </div>
  );
};

export default basketItem;
