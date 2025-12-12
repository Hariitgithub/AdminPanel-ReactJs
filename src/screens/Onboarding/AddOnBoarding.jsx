import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AddOwnerDetails from '../../components/Onboarding/AddOwnerDetails';
import Checkout from '../../components/Onboarding/Checkout';
import Country from '../../components/Onboarding/Country';
import DiscountOffers from '../../components/Onboarding/DiscountOffers';
import AdvancedSettings from '../../components/Onboarding/AdvancedSettings';
import TakeAway from '../../components/Onboarding/TakeAway';
import Tax from '../../components/Onboarding/Tax';
import Payment from '../../components/Onboarding/Payment';

const AddOnBoarding = () => {
    const [tab, setTab] = useState(0);
    const navigate = useNavigate();
    return (
        <div className="dashRightView home_section trans">
            <div className='w-90 m-auto mt-3 mb-5'>
                <div className='d-flex ac-jb '>
                    <button onClick={() => {
                        setTab(0);
                    }} className={`${tab == 0 ? "bg-primary1" : " "} tab-onboard`}>
                    </button>

                    <button onClick={() => {
                        setTab(1);
                    }} className={`${tab == 1 ? "bg-primary1" : " "} tab-onboard`}>
                    </button>

                    <button onClick={() => {
                        setTab(2);
                    }} className={`${tab == 2 ? "bg-primary1" : " "} tab-onboard`}>
                    </button>
                    <button onClick={() => {
                        setTab(3);
                    }} className={`${tab == 3 ? "bg-primary1" : " "} tab-onboard`}>
                    </button>
                    <button onClick={() => {
                        setTab(4);
                    }} className={`${tab == 4 ? "bg-primary1" : " "} tab-onboard`}>
                    </button>
                    <button onClick={() => {
                        setTab(5);
                    }} className={`${tab == 5 ? "bg-primary1" : " "} tab-onboard`}>
                    </button>
                    <button onClick={() => {
                        setTab(6);
                    }} className={`${tab == 6 ? "bg-primary1" : " "} tab-onboard`}>
                    </button>
                    <button onClick={() => {
                        setTab(7);
                    }} className={`${tab == 7 ? "bg-primary1" : " "} tab-onboard`}>
                    </button>
                </div>
            </div>
            <div className='mb-5'>
                {tab == 0 && (
                    <AddOwnerDetails setTab={setTab} />
                )}
                {tab == 1 && (
                    <Checkout setTab={setTab} />
                )}
                {tab == 2 && (
                    <Country setTab={setTab} />
                )}
                {tab == 3 && (
                    <DiscountOffers setTab={setTab} />
                )}
                {tab == 4 && (
                    <AdvancedSettings setTab={setTab} />
                )}
                {tab == 5 && (
                    <TakeAway setTab={setTab} />
                )}
                {tab == 6 && (
                    <Tax setTab={setTab} />
                )}
                {tab == 7 && (
                    <Payment setTab={setTab} />
                )}
            </div>
        </div>
    )
}

export default AddOnBoarding