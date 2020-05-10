import React, { useState } from 'react';
import { Button, Image, Input, Wrapper } from './search-box.styles';

export const SearchBox = ({ onClick, value = '' }) => {
    const [valueInput, setValueInpunt] = useState(value);
    return (
        <Wrapper>
            <Input
                value={valueInput}
                placeholder="Nunca dejes de buscar"
                onKeyDown={(event) => {
                    if (event.keyCode === 13) {
                        onClick(valueInput);
                    }
                }}
                onChange={(event) => {
                    setValueInpunt(event.target.value);
                }}
            />
            <Button onClick={() => { onClick(valueInput); }}>
                <Image src={process.env.PUBLIC_URL + '/assets/ic_Search.png'} />
            </Button>
        </Wrapper>
    )
}