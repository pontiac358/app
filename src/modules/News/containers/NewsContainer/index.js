import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { fetchNews } from '../../actions';
import { NewsList } from '../../components';
import Error from 'core/shared/Error';
import Loader from 'core/shared/Loader';

export class NewsContainer extends React.Component {
    componentDidMount() {
        this.props.fetchNews()
    }

    render() {
        if(this.props.isLoading){
            return <Loader type={'dots'}  color={'#000'} size={'50px'}/>
        }
        const { news, error } = this.props;

        return (
            <>
                {
                    <Error error={ error } />
                }
                {
                    <NewsList news={ news }/>
                }
            </>
        );
    }
}

NewsContainer.propTypes = {
    news: PropTypes.object,
    error: PropTypes.object,
};

const mapStateToProps = ({ news }) => ({
    news,
    error: news.error,
    isLoading: news.isLoading
});

const mapDispatchToProps = {
    fetchNews
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer)