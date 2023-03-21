import React from 'react';
import {Fade as Burger} from 'hamburger-react'
import {BurgerWrp} from "./style"
import {useMediaQuery} from "react-responsive";
import {media} from "../../global/variables";

export const Hamburger = ({callback, size, toggled, rounded, label, color, type}) => {
    return (
        <BurgerWrp onClick={callback} data-type={type ?? type}>
            <Burger
                size={size ?? size}
                rounded={rounded ?? rounded}
                toggled={toggled ?? toggled}
                label={label ?? label}
                color={color ?? color}
            />
        </BurgerWrp>
    )
};