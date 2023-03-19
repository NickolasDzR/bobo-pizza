import React from 'react';
import {Image, ProductItem, ProductAbout, ProductTitle} from "./style"

const Product = ({title, about, img}) => {
    return (
        <ProductItem>
            <ProductTitle>{title}</ProductTitle>
            <ProductAbout>{about}</ProductAbout>
            <Image src={img} />
        </ProductItem>
    );
}

export default Product;