import React, { Component } from 'react';
import PersonalInfo from './PersonalInfo';
import JobDetails from './JobDetails';
import AllInfo from './AllInfo';
import EmployerSignUp from './EmployerSignUp';

export class SignUpForm extends Component {
    state = {
        step: 1,

        firstName: '',
        lastName: '',
        email: '',
        password: '',

        role: '',
        location: '',
    }

    nextStep = () => {
        const { step } = this.state;

        this.setState({
            step: step + 1
        });
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    showStep = () => {
        const { step, firstName, lastName, email, password, role, location} = this.state;

        if(step === 1)
            return (<PersonalInfo 
                nextStep = {this.nextStep} 
                handleChange = {this.handleChange} 
                firstName={firstName} 
                lastName={lastName}
                email ={email}
                password = {password}
            />);
        if(step === 2)
            return (<JobDetails 
                nextStep = {this.nextStep} 
                prevStep = {this.prevStep}
                handleChange = {this.handleChange} 
                role={role} 
                location={location}
            />);
        if(step === 3)
            return (<AllInfo 
                firstName={firstName} 
                lastName={lastName}
                email = {email}
                password={password}
                role={role} 
                location={location}
                prevStep = {this.prevStep}
            />);
    }

    render(){
        const { step } = this.state;

        return(
            <>
                <h1> Lets Get You Started </h1>
                <h2> Step {step} of 3</h2>
                {this.showStep()}
            </>
        );
    }
}

export default SignUpForm;