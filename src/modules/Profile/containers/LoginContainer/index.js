import  React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { login } from '../../actions';
import * as validation from 'helper/validation';
import Input from 'core/shared/Input';
import Btn from 'core/shared/Btn';
import Error from 'core/shared/Error';
import Loader from 'core/shared/Loader';
import Head from 'core/shared/Head';
import { Wrapper } from './styles';


export class LoginContainer extends React.Component {
    state = {
        email: '',
        password: '',
        validFields: {
            email: {
                valid: null,
                types: ['email', 'required'],
                touched: false
            },
            password: {
                valid: null,
                types: ['required'],
                touched: false
            }
        }
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const { email, password } = this.state;


        this.props.login({ email, password }).then((data) => {
            if(data.status === 'ok'){
                this.props.history.push(`/profile/${ this.props.userId }`);
            }else if(data.status === 'err' &&  data.message === 'wrong_email_or_password'){
                this.setState({
                    password: ''
                })
            }
        })
    };

    handleChange = e => {
        const value = e.currentTarget.value;
        const fieldName = e.currentTarget.getAttribute('name');

        this.setState(prev => ({
            ...prev,
            [fieldName]: value,
        }),this.validation)
    };

    onFocus = e => {
        const fieldName = e.currentTarget.getAttribute('name');
        this.setState(prev => ({
            validFields:{
                ...prev.validFields,
                [fieldName]: {
                    ...prev.validFields[fieldName],
                    touched: true,
                }
            }
        }))
    };

    validation = () => {
        const { validFields } = this.state;

        Object.keys(validFields).map(name => {
            const field = validFields[name];
            const value = this.state[name];

            if(!field.touched){
                return
            }

            const valid = field.types.map((type) => {
                const check = validation[type](value);

                return check
            });

            setTimeout(() => {
                this.setState({
                    validFields:{
                        ...this.state.validFields,
                        [name]: {
                            ...this.state.validFields[name],
                            valid,
                        }
                    }
                })
            })

        })
    };

    validForm = () => {
        const { validFields } = this.state;
        let valid = true;

        Object.keys(validFields).map(name => {
            if(!validFields[name].valid || validFields[name].valid.filter(item => item).length){
                valid = false
            }
        });

        return valid
    };


    render() {
        const { email, password, validFields } = this.state;
        const { error, isLoading } = this.props;


        if(isLoading){
            return <Loader type={'dots'}  color={'#000'} size={'50px'}/>
        }

        return (
            <Wrapper>
                <Error error={ error } />
                <Head title={`Вход`}/>
                <form onSubmit={ this.handleSubmit }>
                    <Input
                        onChange={ this.handleChange }
                        type='input'
                        name='email'
                        placeholder='email'
                        value={ email }
                        valid={ validFields.email.valid }
                        onFocus={ this.onFocus }
                    />
                    <Input
                        onChange={ this.handleChange }
                        type='password'
                        name='password'
                        placeholder='password'
                        value={ password }
                        valid={ validFields.password.valid }
                        onFocus={ this.onFocus }
                    />
                    <Btn
                        type='submit'
                        title='Вход'
                        disabled={ !this.validForm() }
                    />
                </form>
            </Wrapper>
        );
    }
}


LoginContainer.propTypes = {
    userId: PropTypes.number,
    error: PropTypes.object,
    isLoading: PropTypes.bool,
    login: PropTypes.func,
};


const mapStateToProps = ({ user: { id, error, isLoading } }) => ({
    userId: id,
    error,
    isLoading
});

const mapDispatchToProps = {
    login
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginContainer))