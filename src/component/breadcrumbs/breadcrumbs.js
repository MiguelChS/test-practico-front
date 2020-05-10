import React from 'react';
import { Ul, Li, Link } from './breadcrumbs.styles';

export const Breadcrumbs = ({ listWord = [] }) => {
    const listItem = listWord.map((item, index) => {
        if (listWord.length - 1 === index) {
            return <Li key={index}><Link> {item.text} </Link></Li>
        } else {
            return <Li key={index}><Link href={item.href}> {item.text} </Link>></Li>
        }
    });

    return (
        <Ul>
            {listItem}
        </Ul>
    )
}