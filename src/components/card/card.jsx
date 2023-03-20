import React from 'react';
import {
    CardAdditionalIngr, CardAddToCartBtn,
    CardBlock, CardBlockWrp,
    CardContent,
    CardContentInner,
    CardDetail, CardFooter,
    CardImg,
    CardImgWrp,
    CardOverlay, CardTag, CardTags,
    CardTitle, CardToggleBtn,
    CardWrp, RemoveIcon
} from "./style";

export const Card = ({props}) => {
    const {title, text, img, cost, id, compos, ingredients} = props;

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
                </CardBlockWrp>
            </CardBlock>

            <CardFooter>
                <CardAddToCartBtn text={`Добавить в корзину ${cost} ₽`}/>
            </CardFooter>

        </CardWrp>
    );
};