import React from 'react';
import {AnimatePresence, motion} from "framer-motion";
import {
    CardAdditionalIngr, CardAddToCartBtn,
    CardBlock, CardBlockWrp,
    CardContent,
    CardContentInner,
    CardDetail, CardFooterDesk, CardFooterMob,
    CardImg,
    CardImgWrp,
    CardOverlay, CardTag, CardTags,
    CardTitle, CardToggleBtn,
    CardWrp, RemoveIcon
} from "./style";
import {useMediaQuery} from "react-responsive";
import {media} from "../../global/variables";
import data from "../../data.json"
import {observer} from "mobx-react-lite";
import {Hamburger} from "../hamburger/hamburger";
import {cardStore} from "../../utils/store/card";


const Card = () => {
    const {setIsCardState, cardIndex, isCardActive} = cardStore
    const {title, text, img, cost, compos, ingredients} = data.products[cardIndex];
    const isMobile = useMediaQuery({query: `(min-width: ${media.lg}px)`});

    console.log(data.products[cardIndex]);

    const cardVariantsOverlay = {
        show: {
            opacity: 0.7,
        },
        hidden: {
            opacity: 0,
        },
    }

    const cardVariantsContent = {
        show: {
            y: 0,
            opacity: 1,
        },
        hidden: {
            y: -30,
            opacity: 0,
        },
    }

    const closeCardHandler = () => {
        return setIsCardState(false);
    }

    return (
        <AnimatePresence>
            {isCardActive && <CardWrp>
                <CardOverlay as={motion.div} transition={{duration: .3}} exit={{opacity: 0, transition: {delay: .2}}} variants={cardVariantsOverlay} animate={isCardActive ? "show" : "hidden"}/>
                <CardBlock as={motion.div} initial={{y: -30, opacity: 0}} exit={{y: -30, opacity: 0, delay: 0}} transition={{duration: .3, delay: .2}} variants={cardVariantsContent} animate={isCardActive ? "show" : "hidden"}>
                    <Hamburger state={true} type={"card"} callback={() => closeCardHandler()}/>
                    <CardBlockWrp>
                        <CardImgWrp>
                            {img.length > 0 && <CardImg src={require(`../../assets/images/${img}.webp`)}/>}
                        </CardImgWrp>
                        <CardContent>
                            <CardContentInner>

                                <CardTitle>
                                    {title}
                                </CardTitle>

                                <CardDetail>
                                    {text}
                                </CardDetail>

                                <CardTags>
                                    {compos &&
                                        compos.map((item, index) => <CardTag key={index}>{item} <RemoveIcon/>,&nbsp;
                                        </CardTag>)
                                    }
                                </CardTags>

                                <CardToggleBtn buttons={["Маленькая", "Средняя", "Большая"]}/>
                                <CardToggleBtn buttons={["Традиционное", "Тонкое"]}/>

                                <CardAdditionalIngr ingredients={ingredients}/>
                            </CardContentInner>
                        </CardContent>
                        {
                            isMobile
                            &&
                            <CardFooterDesk>
                                <CardAddToCartBtn text={`Добавить в корзину ${cost} ₽`}/>
                            </CardFooterDesk>
                        }
                    </CardBlockWrp>
                </CardBlock>

                {
                    !isMobile
                    &&
                    <CardFooterMob>
                        <CardAddToCartBtn text={`Добавить в корзину ${cost} ₽`}/>
                    </CardFooterMob>
                }
            </CardWrp>}
        </AnimatePresence>
    );
};

export default observer(Card)