import React, {useState} from 'react';
import {motion} from "framer-motion";
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
    const {setIsCardState, cardIndex, isCardActive} = cardStore;
    const {title, text, img, cost, compos, ingredients, size, dough} = data.products[cardIndex];

    const isMobile = useMediaQuery({query: `(min-width: ${media.lg}px)`});
    const [orderType, setOrderType] = useState({
        "title": title,
        "img": img,
        "compos": compos,
        "ingredients": ingredients,
        "size": size,
        "dough": dough,
    });

    const orderFormationHandler = (type, text) => {
        const ar = orderType[type];

        switch(type) {
            case 'compos':
                if (ar.includes(text)) {
                    return setOrderType(prev => {
                        return {...prev, 'compos': ar.filter(type => type !== text)}
                    });
                }
                return setOrderType(prev => {
                    return {...prev, 'compos': ar.push(text)}
                });
            default:
                break;
        }
    }

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
        <CardWrp>
            <CardOverlay as={motion.div} transition={{duration: .3}} exit={{opacity: 0, transition: {delay: .2}}} variants={cardVariantsOverlay} animate={isCardActive ? "show" : "hidden"}/>
            <CardBlock as={motion.div} initial={{y: -30, opacity: 0}} exit={{y: -30, opacity: 0, delay: 0}} transition={{duration: .3, delay: .2}} variants={cardVariantsContent} animate={isCardActive ? "show" : "hidden"}>
                {isMobile && <Hamburger type={"card"} label={"Убрать карточку товара"} rounded={true} color={"white"} toggled={true} size={34} callback={() => closeCardHandler()}/>}
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

                            {compos &&
                                <CardTags>
                                    {compos.map((item, index) => <CardTag onClick={() => orderFormationHandler("compos", item)} key={index}>{item} <RemoveIcon/>,&nbsp;</CardTag>)}
                                </CardTags>
                            }

                            <CardToggleBtn buttons={size}/>
                            <CardToggleBtn buttons={dough}/>

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
                !isMobile &&
                <CardFooterMob>
                    <CardAddToCartBtn text={`Добавить в корзину ${cost} ₽`}/>
                </CardFooterMob>
            }
        </CardWrp>
    );
};

export default observer(Card)