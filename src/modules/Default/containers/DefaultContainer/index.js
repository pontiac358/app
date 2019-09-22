import  React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";


export class DefaultContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {};

    componentDidMount() {

    }



    render() {

        return (
            <div>
                Default
            </div>
        );
    }
}

DefaultContainer.propTypes = {};

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DefaultContainer)