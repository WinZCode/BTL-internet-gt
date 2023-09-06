import React from "react";
import { ArrowRightOutlined, ShopOutlined } from '@ant-design/icons';
import * as ROUTE from "../../../constants/routes"
import Header from "../../../components/Header/Header";
import StepTracker from "../components/StepTracker";
import { useNavigate } from "react-router-dom";
const CheckOutStep1 = () => {
    let navigate = useNavigate();
    const onClickPrevious = () => navigate('/');
    const onClickNext = () => navigate(ROUTE.CHECKOUT_STEP_2);
    return (
        <div className="bg-[#f9f9f9] min-h-[100vh]">
            <Header />
            <StepTracker current={1} />
            <div className="w-[80rem] m-auto">
                <h3 className="text-center text-[#1a1a1a] font-semibold text-3xl">Order Summary</h3>
                <span className="text-center block w-full text-[#4a4a4a] text-[1.2rem] mt-5">Review items in your basket.</span>
                <div></div>
                <div className="text-right">
                    <p className="text-[1.3rem] text-[#4a4a4a] m-0 leading-9">Subtotal</p>
                    <h2 className="my-[1.3rem] text-[#1a1a1a] text-3xl font-semibold">$240.00</h2>
                </div>
                <div className="flex items-center justify-between">
                    <button 
                    
                        className="button button-large bg-[#f2f2f2] text-[#7d7d7d] text-[1.6rem] font-semibold border border-solid border-[#e1e1e1] "
                        onClick={onClickPrevious}
                        type="button"
                    >
                        <ShopOutlined />
                        &nbsp;
                        Continue Shopping
                    </button>
                    <button 
                        className="button button-large bg-[#1a1a1a] text-white font-semibold text-[1.6rem]" 
                        type="submit"
                        onClick={onClickNext}
                    >
                        Next Step
                        &nbsp;
                        <ArrowRightOutlined />
                    </button>
                </div>
            </div>
      </div>
    );
};

export default CheckOutStep1;
