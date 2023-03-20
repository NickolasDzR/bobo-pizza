import React from 'react';
import {IngredientsCost, IngredientsImage, IngredientsItem, IngredientsList, IngredientsTitle} from "./style";

export const AdditionalIngredients = ({ingredients, className}) => {

    return (
        <IngredientsList className={className}>
            { ingredients ?
                ingredients.map((ingredient, index) =>
                    <IngredientsItem key={index}>
                        <IngredientsImage src={require(`../../assets/images/ingredients/${ingredient.img}.webp`)}/>
                        <IngredientsTitle>
                            {ingredient.title}
                        </IngredientsTitle>
                        <IngredientsCost>
                            {ingredient.cost} ₽
                        </IngredientsCost>
                    </IngredientsItem>
                )
                :
                false
            }
        </IngredientsList>
    );
};