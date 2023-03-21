import React, {useState} from 'react';
import {HeaderInner, HeaderMain, HeaderWrp} from "./style";
import {Logo} from "../logo/logo";
import {Hamburger} from "../hamburger/hamburger";
import {Navigation} from "../navigation/navigation";
import data from "../../data.json"
import {Anchors} from "../anchors/anchors";
import {useMediaQuery} from "react-responsive";
import {media} from "../../global/variables";

export const Header = () => {
    const [isActiveNav, setIsActiveNav] = useState(false);
    const isMobile = useMediaQuery({query: `(min-width: ${media.md}px)`});

    const burgerStateHandler = (e) => {
        e.preventDefault();
        setIsActiveNav(!isActiveNav);
    }

    return (
        <HeaderMain>
            <HeaderWrp>

                <HeaderInner>
                    <Logo/>
                    {!isMobile && <Hamburger callback={burgerStateHandler} size={22} label={"Показать меню"} rounded={true} color={isActiveNav ? "white" : "black"}/>}
                    <Navigation state={isActiveNav} items={data.menu}/>
                </HeaderInner>

                <Anchors items={data.anchors}/>

            </HeaderWrp>
        </HeaderMain>
    );
};