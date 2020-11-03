import React from 'react';

import "./styles/Badge.css";
import confLogo from '../images/badge-header.svg';
import avatar from '../images/herchila_emoji.jpg'

class Badge extends React.Component {
    render() {
        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={confLogo} alt="Logo de la conferencia" width="184" />
                </div>

                <div className="Badge__section-name">
                    <img 
                        className="Badge__avatar"
                        src={avatar}
                        alt="Avatar"
                    />
                    <h1>
                        {this.props.firstName}<br/>{this.props.lastName}
                    </h1>
                </div>

                <div className="Badge__section-info">
                    <h3>{this.props.jobTitle}</h3>
                    <div>@{this.props.twitterHandle}</div>
                </div>

                <div className="Badge__footer">#platfizonf</div>
            </div>
        )
    } 
}

export default Badge;
