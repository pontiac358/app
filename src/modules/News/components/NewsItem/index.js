import React from 'react';
import { Title, Wrapper, Text } from './styles';

const NewsItem = ({ data }) => {

    return (
        <Wrapper>
            <Title>{data.title}</Title>
            <Text>{data.text}</Text>
        </Wrapper>
    )
};

export default NewsItem