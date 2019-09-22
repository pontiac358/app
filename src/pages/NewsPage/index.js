import React from 'react';
import News  from '../../modules/News';
import Head from 'core/shared/Head';

const NewsPage = () => {

    const { NewsContainer } = News.containers;


    return (
        <>
            <Head title={`Новости`}/>
            <NewsContainer />
        </>
    )
}


export default NewsPage