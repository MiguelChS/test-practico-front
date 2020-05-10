import React, { useState, useEffect } from 'react';
import { Header } from '../component/header/header';
import { SearchBox } from '../component/search-box/search-box';
import { Breadcrumbs } from '../component/breadcrumbs/breadcrumbs';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { api } from '../services/api';
import { ProductResultCard } from '../component/productResultCard/ProductResultCard';
import { Main, WrapResult, MjsResult } from '../commons/styles';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export const Search = () => {
    const query = useQuery();
    const history = useHistory();
    const [result, setResult] = useState([]);
    const [categorie, setCategorie] = useState([]);
    const [statusRequest, setStatusRequest] = useState({ loading: false, error: '' });
    const searchProduct = async (value) => {
        setStatusRequest({ loading: true, error: '' });
        setResult([]);
        setCategorie([]);
        try {
            const response = await api.search(value);
            setResult(response.items);
            setCategorie(response.categories);
            setStatusRequest({ loading: false, error: '' });
        } catch (error) {
            setStatusRequest({ loading: false, error: 'Hubo un error intente nuevamente' });
        }
    }
    useEffect(() => {
        const value = query.get("q");
        if (value) {
            searchProduct(value);
        }
    }, [])
    const renderResult = () => {
        return (
            <>
                {statusRequest.error ?
                    <MjsResult>{statusRequest.error}</MjsResult> :
                    <>
                        {!result.length ? <MjsResult>No se encontro resultados</MjsResult> :
                            <>
                                <Breadcrumbs listWord={categorie}></Breadcrumbs>
                                <WrapResult>
                                    {result.map((item) => <ProductResultCard key={item.id} data={item}></ProductResultCard>)}
                                </WrapResult>
                            </>
                        }
                    </>
                }
            </>
        )
    }
    return (
        <>
            <Header>
                <SearchBox
                    value={query.get("q")}
                    onClick={async (value) => {
                        if (value) {
                            history.push(`/items?q=${value}`);
                            searchProduct(value);
                        }
                    }}
                ></SearchBox>
            </Header>
            <Main>
                {statusRequest.loading ? <MjsResult>loading...</MjsResult> : renderResult()}
            </Main>
        </>
    )
}