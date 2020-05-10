import React, { useState, useEffect } from 'react';
import { Header } from '../component/header/header';
import { SearchBox } from '../component/search-box/search-box';
import { Breadcrumbs } from '../component/breadcrumbs/breadcrumbs';
import { ProductCard } from '../component/productCard/productCard';
import { useHistory, useParams } from 'react-router-dom';
import { api } from '../services/api';
import { Main, WrapResult, MjsResult } from '../commons/styles';


export const Details = () => {
    const history = useHistory();
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [categorie, setCategorie] = useState([]);
    const [statusRequest, setStatusRequest] = useState({ loading: true, error: '' });
    const searchDetails = async () => {
        try {
            const response = await api.product(id);
            setCategorie(response.categories);
            setProduct(response.items);
            setStatusRequest({ loading: false, error: '' });
        }
        catch (err) {
            setStatusRequest({ loading: false, error: 'Hubo un error intente nuevamente' });
        }
    }
    useEffect(() => {
        searchDetails();
    }, [])
    const renderResult = () => {
        return (
            <>
                {statusRequest.error ?
                    <MjsResult>{statusRequest.error}</MjsResult> :
                    <>
                        <Breadcrumbs listWord={categorie}></Breadcrumbs>
                        <WrapResult>
                            <ProductCard data={product}></ProductCard>
                        </WrapResult>
                    </>
                }
            </>
        )
    }
    return (
        <>
            <Header>
                <SearchBox
                    onClick={(value) => {
                        if (value) {
                            history.push(`/items?q=${value}`);
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