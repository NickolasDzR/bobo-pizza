import React from 'react';
import {AnchorsItem, AnchorsLink, AnchorsList, AnchorWrp} from "./style";
import DragScroll from 'react-dragscroll-ts'

export const Anchors = ({items}) => {
    return (
        <DragScroll>
            <AnchorsList>
                {
                    items.map(item =>
                        (
                            <AnchorsItem key={item.id}>
                                <AnchorsLink href={item.href}>
                                    {item.title}
                                </AnchorsLink>
                            </AnchorsItem>
                        )
                    )
                }
            </AnchorsList>
        </DragScroll>
    );
};
