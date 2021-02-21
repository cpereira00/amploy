import React, { Component } from 'react';
import EmployerSignUp from './EmployerSignUp';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import {Link} from 'react-router-dom';

class PersonalInfo extends Component{

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render(){
        const { firstName, lastName, email, password, handleChange } = this.props;
        return(
            <>
                <h2>Personal information:</h2>
                <label class = "label">
                    <input 
                        class = "input"
                        type="text"
                        name="firstName"
                        value={firstName}
                        placeholder="First Name"
                        onChange={handleChange('firstName')}
                    />
                </label>
                <label class = "label">
                    <input 
                        class = "input"
                        type="text"
                        name="lastName"
                        value={lastName}
                        placeholder="Last Name"
                        onChange={handleChange('lastName')}
                    />
                </label>
                <label class = "label">
                    <input
                        class = "input" 
                        type="text"
                        name="email"
                        value={email}
                        placeholder="Email"
                        onChange={handleChange('email')}
                    />
                </label>
                <label class = "label">
                    <input 
                        class = "input"
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Password"
                        onChange={handleChange('password')}
                    />
                </label>
                <button className="Next" onClick={this.continue}>
                    Next
                </button>

                <Link to = '/empsignup'><a>Are you an Employer?</a></Link>

            </>
        );
    }
}

export default PersonalInfo;