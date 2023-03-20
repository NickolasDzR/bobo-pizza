import {action, makeObservable, observable} from "mobx";

let debounceSetTimeout = undefined;

class Events {
    useWindowSize = [0, 0];

    constructor() {
        makeObservable(this, {
            useWindowSize: observable,
            updateSize: action,
        });

        window.addEventListener("resize", this.updateSizeDebounce);
    }

    // проверяем ширину и высоту экрана
    updateSize = () => {
        this.useWindowSize = [window.innerWidth, window.innerHeight];
    };

    updateSizeDebounce = () => {
        clearTimeout(debounceSetTimeout);
        debounceSetTimeout = setTimeout(this.updateSize, 300);
    }
}

export const eventsStore = new Events();