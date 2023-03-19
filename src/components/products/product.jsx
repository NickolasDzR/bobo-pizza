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

const Products = ({items}) => {
    return (
        <ProductsWrp>
            <ProductInner>
                {
                    items.map(item => (
                        <ProductsItem>
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
}

export default Products;