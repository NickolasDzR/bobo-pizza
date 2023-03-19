import React from 'react';
import {NavigationList, NavigationWrp, NavigationItem, NavigationAnchor, NavigationInner} from "./style";
import {motion} from "framer-motion";
import { useMediaQuery } from 'react-responsive'

export const Navigation = ({state, items}) => {
    const isMobile = useMediaQuery({ query: '(min-width: 768px)' })

    const navItemsVariants = {
        open: i => {
            return {
                opacity: 1, x: 0, transition: {delay: i * 0.05}
            }
        },
        closed: {
            opacity: 0,
            x: "-100%",
        }
    }

    return (
        <NavigationWrp className={state ? "active" : ""}>
            <NavigationInner>
                <NavigationList>
                    {items.map((item, index) => {
                        return (
                            <NavigationItem as={motion.li}
                                            animate={state ? "open" : "closed"}
                                            custom={index}
                                            variants={isMobile ? "" : navItemsVariants}
                                            key={item.id}>
                                <NavigationAnchor href={`#${item.href}`}>
                                    {item.title}
                                </NavigationAnchor>
                            </NavigationItem>
                        )
                    })}
                </NavigationList>
            </NavigationInner>
        </NavigationWrp>
    );
};