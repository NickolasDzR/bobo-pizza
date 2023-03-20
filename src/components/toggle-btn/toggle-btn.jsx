import React, {useState} from 'react';
import {ToggleBtnInner, ToggleBtnInput, ToggleBtnLabel, ToggleBtnLine, ToggleBtnSpan, ToggleBtnWrp} from "./style";

export const ToggleBtn = ({buttons, className}) => {
    const [activeItem, setActiveItem] = useState(0);
    const buttonLineWidth = 100 / buttons.length;

    return (
        <ToggleBtnWrp className={className}>
            <ToggleBtnInner>
                {
                    buttons.map((button, index) =>
                        <ToggleBtnSpan key={index} onClick={() => setActiveItem(index)}>
                            <ToggleBtnInput/>
                            <ToggleBtnLabel>{button}</ToggleBtnLabel>
                        </ToggleBtnSpan>
                    )
                }
                <ToggleBtnLine style={{
                    width: `${buttonLineWidth}%`,
                    left: `${buttonLineWidth * activeItem}%`
                }}/>
            </ToggleBtnInner>
        </ToggleBtnWrp>
    );
};