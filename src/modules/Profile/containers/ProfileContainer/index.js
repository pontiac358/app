import  React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { withRouter } from "react-router";

import { fetchProfile } from '../../actions';

import { orderArrForIndex } from 'helper/functions';
import Error from 'core/shared/Error';
import Loader from 'core/shared/Loader';
import Social from 'core/shared/Social';
import InfoItem from '../../components/InfoItem';
import Head from 'core/shared/Head';


export class ProfileContainer extends React.Component {

    state = {
        userId: null
    }

    componentDidMount() {
        const { fetchProfile } = this.props;
        const id = this.props.match.params.id;

        fetchProfile(id).then(profile => {
            if(profile.status === 'ok') {
                this.setState({
                    userId: profile.data.userId
                })
            }
        })
    }

    static getDerivedStateFromProps(nextProps, prevState){
        if (prevState.userId &&  parseInt(prevState.userId) !== nextProps.match.params.id) {
            const id = nextProps.match.params.id;
            return {
                userId: id
            }
        }
        return  {
            userId: nextProps.match.params.id
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.props.fetchProfile(this.props.match.params.id).then(profile => {
                if(profile.status === 'ok'){
                    this.setState({
                        userId: profile.data.userId
                    })
                }
            })
        }
    }


    renderLanguages = (languages) => {

        return languages.map((item, i) => <span key={ i }>{ item } { i < languages.length - 1 ? ',' : '' } </span>)
    };

    renderSocial = (social) => {
        const orderSocial = [2,0,1,3,4,5];

        return <Social size={ 64 } socialList={ orderArrForIndex(social, orderSocial)} />
    };


    render() {
        if(this.props.isLoading){
            return <Loader type={'dots'}  color={'#000'} size={'50px'}/>
        }
        const { error, info} = this.props;



        return (
            <>
                <Error error={ error } />
                <Head title={`Профиль`}/>
                {
                    info && (
                        <div>
                            <InfoItem label={`Город:`} value={ info.city } />
                            <InfoItem label={`Знание языков:`} value={ this.renderLanguages(info.languages) } />
                            <InfoItem label={`Ссылки:`} value={ this.renderSocial(info.social) } />
                        </div>
                    )
                }
            </>
        );
    }
}

ProfileContainer.propTypes = {
    userId: PropTypes.number,
    error: PropTypes.object,
    isLoading: PropTypes.bool,
    login: PropTypes.func,
};

const mapStateToProps = ({ user: { id, error, isLoading, info } }) => ({
    userId: id,
    error,
    isLoading,
    info
});

const mapDispatchToProps = {
    fetchProfile
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileContainer))