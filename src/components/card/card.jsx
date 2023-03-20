import React, {useEffect} from 'react';
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
import {observer} from "mobx-react-lite";
import {useMediaQuery} from "react-responsive";
import {media} from "../../global/variables";
import {eventsStore} from "../../utils/store/events";

export const Card = observer(({props}) => {
    const {title, text, img, cost, id, compos, ingredients} = props;
    const isMobile = useMediaQuery({query: `(min-width: ${media.lg}px)`});
    const {useWindowSize} = eventsStore;

    useEffect(() => {
        console.log(isMobile);
    }, [useWindowSize]);


    return (
        <CardWrp>
            <CardOverlay/>
            <CardBlock>
                <CardBlockWrp>
                    <CardImgWrp>
                        {img ? <CardImg src={require(`../../assets/images/${img}.webp`)}/> : <img src=""/>}
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
                                {compos ?
                                    compos.map((item, index) => <CardTag key={index}>{item} <RemoveIcon/>,&nbsp;
                                    </CardTag>) : false
                                }
                            </CardTags>

                            <CardToggleBtn buttons={["Маленькая", "Средняя", "Большая"]}/>
                            <CardToggleBtn buttons={["Традиционное", "Тонкое"]}/>

                            <CardAdditionalIngr ingredients={ingredients}/>
                        </CardContentInner>
                    </CardContent>
                    {
                        isMobile
                            ?
                            <CardFooterDesk>
                                <CardAddToCartBtn text={`Добавить в корзину ${cost} ₽`}/>
                            </CardFooterDesk>
                            :
                            false
                    }
                </CardBlockWrp>
            </CardBlock>

            {
                isMobile
                    ?
                    false
                    :
                    <CardFooterMob>
                        <CardAddToCartBtn text={`Добавить в корзину ${cost} ₽`}/>
                    </CardFooterMob>
            }
        </CardWrp>
    );
});