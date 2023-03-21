import React from 'react';
import {
    ProductsItem,
    ProductsAbout,
    ProductsTitle,
    ProductsWrp,
    ProductCost,
    ProductInner,
    ProductImage,
    ProductContentWrp
} from "./style"
import {cardStore} from "../../utils/store/card";
import {observer} from "mobx-react-lite";

const Products = ({items}) => {
    const {setCardIndex, setIsCardState} = cardStore;

    const cardHandler = (index) => {
        setCardIndex(index);
        setIsCardState(true);
    }

    return (
        <ProductsWrp>
            <ProductInner>
                {
                    items.map((item, index) => (
                        <ProductsItem key={item.id} onClick={() => cardHandler(index)}>
                            <ProductImage src={require(`../../assets/images/${item.img}.webp`)}/>
                            <ProductContentWrp>
                                <ProductsTitle>{item.title}</ProductsTitle>
                                <ProductsAbout>{item.text}</ProductsAbout>
                                <ProductCost>От {item.cost} ₽</ProductCost>
                            </ProductContentWrp>
                        </ProductsItem>
                    ))
                }
            </ProductInner>
        </ProductsWrp>
    );
};

export default observer(Products);