import React from 'react';
import { withRouter, Link } from 'react-router-dom'

import './BackButton.css';

class BackButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = { opened: false };
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler() {
        this.props.history.push('/');
        this.props.onBack();
    }

    render() {
        return (
            <div className="back-button-container">
                <span className="back-link">
                    <Link to="/"><i className="icofont-home" /></Link>
                </span>
            </div>
        );
    }
}

export default withRouter(BackButton);
