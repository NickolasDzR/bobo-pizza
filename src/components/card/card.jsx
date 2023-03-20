import React, {useState} from 'react';
import {
    CardBlock,
    CardContent,
    CardContentInner,
    CardDetail,
    CardImg,
    CardImgWrp,
    CardOverlay, CardTag, CardTags,
    CardTitle,
    CardWrp, RemoveIcon
} from "./style";
import {ToggleBtn} from "../toggle-btn/toggle-btn";

export const Card = ({src}) => {
    const [tagsState, setTagsState] = useState([])


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
                            <CardTag>Пикантная пепперони <RemoveIcon /></CardTag>,&nbsp;
                            <CardTag>порция <RemoveIcon /> </CardTag>,&nbsp;
                            <CardTag>моцареллы, томаты <RemoveIcon /> </CardTag>
                        </CardTags>

                        <ToggleBtn buttons={["Маленькая", "Средняя", "Большая"]} />
                    </CardContentInner>
                </CardContent>
            </CardBlock>
        </CardWrp>
    );
};