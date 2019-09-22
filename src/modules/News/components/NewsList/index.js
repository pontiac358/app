import React from 'react';
import { NewsItem } from '../../components';

const NewsList = ({ news }) => {

    return (
        <div>
            {
                news.data && news.data.map((item, i) => <NewsItem key={ i } data={ item }/>)
            }
        </div>
    )
}

export default NewsList