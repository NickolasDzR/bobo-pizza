import {action, makeObservable, observable} from "mobx";

class Card {
    isCardActive = false;
    cardIndex = 0;

    constructor() {
        makeObservable(this, {
            isCardActive: observable,
            cardIndex: observable,
            setCardIndex: action,
            setIsCardState: action,
        })
    }

    setCardIndex = (index) => {
        return this.cardIndex = index;
    }

    setIsCardState = (state) => {
        console.log(state, "state");
        return this.isCardActive = state;
    }
}

export const cardStore = new Card();

