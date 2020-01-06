import React from 'react';

import "./styles/Badge.css";
import confLogo from '../images/badge-header.jpg';

class Badge extends React.Component {
    render() {
        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={confLogo} alt="Logo de la conferencia" width="184" />
                </div>

                <div className="Badge__section-name">
                    <img className="Badge__avatar" src="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon" alt="Avatar" />
                    <h1>Hernán<br/>Chilabert</h1>
                </div>

                <div className="Badge__section-info">
                    <h3>Full Stack Software Developer</h3>
                    <div>@herchila</div>
                </div>

                <div className="Badge__footer">#platfizonf</div>
            </div>
        )
    } 
}

export default Badge;
