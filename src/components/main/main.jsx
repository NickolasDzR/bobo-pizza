import React from 'react';
import {MainWrp} from "./style";
import data from "../../data.json"
import Products from "../products/product";

export const Main = () => {
    return (
        <MainWrp>
            <Products items={data.products}/>
        </MainWrp>
    );
};