import React from 'react';
import {LogoMain, LogoImage, LogoTitle, LogoText, LogoSubtitle} from "./style";
import {LogoImg} from "../../assets/images";

export const Logo = () => {
    return (
        <LogoMain>
            <LogoImage src={LogoImg}></LogoImage>
            <LogoText>
                <LogoTitle>бобо пицца</LogoTitle>
                <LogoSubtitle>Сеть ципперий № 1 в Дуденево</LogoSubtitle>
            </LogoText>
        </LogoMain>
    )
}