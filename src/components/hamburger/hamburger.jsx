import React from 'react';
import {Fade as Burger} from 'hamburger-react'
import {BurgerWrp} from "./style"

export const Hamburger = ({callback, state}) => {
    return (
        <BurgerWrp onClick={callback}>
            <Burger size={22} rounded label="Показать меню" color={state ? "#fff" : "#000"}/>
        </BurgerWrp>
    );
};