import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import avatar from '../images/herchila_emoji.jpg'
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import Navbar from '../components/Navbar';

class BadgeNew extends React.Component {
    state = { form: {
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        twitterHandle: '',
    } };

    // Una forma de mantener los valores del formulario
    // handleChange = e => {
    //     const nextForm = this.state.form; // Estado actual
    //     nextForm[e.target.name] = e.target.value;
        
    //     this.setState({
    //         form: nextForm
    //     });
    // }

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form, // Todos los valores del form
                [e.target.name]: e.target.value
            }
        });
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="" src={header} alt="Hero " />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                firstName={this.state.form.firstName}
                                lastName={this.state.form.lastName}
                                email={this.state.form.email}
                                jobTitle={this.state.form.jobTitle}
                                twitterHandle={this.state.form.twitterHandle}
                                avatar={avatar}
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm 
                                onChange={this.handleChange}
                                formValues={this.state.form}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BadgeNew;
