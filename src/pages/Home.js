import React from 'react';
import { Header } from '../component/header/header';
import { SearchBox } from '../component/search-box/search-box';
import { useHistory } from 'react-router-dom';

export const Home = () => {
    let history = useHistory();
    return (
        <Header>
            <SearchBox onClick={(value) => { history.push(`/items?q=${value}`) }}></SearchBox>
        </Header>
    )
}