import React from 'react';
import {Fade as Burger} from 'hamburger-react'
import {BurgerWrp} from "./style"
import {useMediaQuery} from "react-responsive";
import {media} from "../../global/variables";

export const Hamburger = ({callback, state, type}) => {
    const isMobile = useMediaQuery({query: `(min-width: ${media.md}px)`});

    if (type === "card") {
        return (
            isMobile &&
                <BurgerWrp data-type={type} onClick={callback}>
                    <Burger size={34} toggled={true} rounded label="Показать меню" color={"#fff"}/>
                </BurgerWrp>
        )
    } else {
        return (
            !isMobile &&
            <BurgerWrp onClick={callback}>
                <Burger size={22} rounded label="Показать меню" color={state ? "#fff" : "#000"}/>
            </BurgerWrp>
        )
    }
};