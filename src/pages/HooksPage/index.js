import React, { useState, useEffect } from 'react';
import News from 'modules/News';
import Error from 'core/shared/Error';
import Loader from 'core/shared/Loader';
import Head from 'core/shared/Head';

const InitialState = {
    data: null,
    isLoading: false,
    error: null,
};

const HooksPage = () => {
    const [ news, setNews ] = useState(InitialState);

    useEffect(() => {
        setNews({
            ...news,
            isLoading: true
        });

        News.actions.fetchNewsHooks().then((data) => {
            if(data.status === 'ok'){
                setNews({
                    ...news,
                    data: data.data,
                    isLoading: false
                })
            }else{
                setNews({
                    ...news,
                    data: null,
                    isLoading: false,
                    error: data
                })
            }
        })
    }, []);

    const { NewsList } = News.components;

    if(news.isLoading){
        return <Loader type={'dots'}  color={'#000'} size={'50px'}/>
    }

    return(
        <>
            <Head title={`Hooks Page News`}/>
            {
                <>
                    <Error error={ news.error } />
                    <NewsList news={ news }/>
                </>
            }
        </>
    )
};


export default HooksPage