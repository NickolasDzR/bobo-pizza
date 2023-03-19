import React from 'react';
import {
    CardBlock,
    CardContent,
    CardContentInner,
    CardDetail,
    CardImg,
    CardImgWrp,
    CardOverlay, CardTag, CardTags,
    CardTitle,
    CardWrp
} from "./style";
import {Icon} from "../icon/icon";

export const Card = ({src}) => {
    return (
        <CardWrp>
            <CardOverlay />
            <CardBlock>
                <CardImgWrp>
                    <CardImg src={require(`../../assets/images/pepperoni.webp`)}/>
                </CardImgWrp>
                <CardContent>
                    <CardContentInner>
                        <CardTitle>
                            Деревенская с бужениной
                        </CardTitle>
                        <CardDetail>
                            30см, традиционное тесто, 710г
                        </CardDetail>
                        <CardTags>
                            <CardTag>Пикантная пепперони <Icon icon={"remove-circle"} /></CardTag>
                            <CardTag>увеличенная порция</CardTag>
                            <CardTag>моцареллы, томаты</CardTag>
                        </CardTags>
                    </CardContentInner>
                </CardContent>
            </CardBlock>
        </CardWrp>
    );
};