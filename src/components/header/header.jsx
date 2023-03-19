import React, {useState} from 'react';
import {HeaderInner, HeaderMain, HeaderWrp} from "./style";
import {Logo} from "../logo/logo";
import {Hamburger} from "../hamburger/hamburger";
import {Navigation} from "../navigation/navigation";
import data from "../../data.json"
import {Anchors} from "../anchors/anchors";

export const Header = () => {
    const [isActiveNav, setIsActiveNav] = useState(false);

    const burgerStateHandler = (e) => {
        e.preventDefault();
        setIsActiveNav(!isActiveNav);
    }

    return (
        <HeaderMain>
            <HeaderWrp>

                <HeaderInner>
                    <Logo/>
                    <Hamburger callback={burgerStateHandler} state={isActiveNav}/>
                    <Navigation state={isActiveNav} items={data.menu}/>
                </HeaderInner>

                <Anchors items={data.anchors}/>

            </HeaderWrp>
        </HeaderMain>
    );
};