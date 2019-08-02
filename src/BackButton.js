import React from 'react';
import { withRouter } from 'react-router-dom'

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
                {
                    !(this.props.history.location.pathname === '/') &&
                    <span className="back-button icofont-arrow-left" onClick={this.onClickHandler}>Back</span>
                }
            </div>
        );
    }
}

export default withRouter(BackButton);
