import React, { Component } from 'react';

class AllInfo extends Component {
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render(){
        const { firstName, lastName, email, role, location} = this.props;
        return(
            <>
            <form>
                <h2>Summary of Information:</h2>
                First Name: <b>{firstName}</b><br />
                Last Name: <b>{lastName}</b><br />
                Email: <b>{email}</b><br />
                Role: <b>{role}</b><br />
                Location: <b>{location}</b><br />
                
                <button className="Back" onClick={this.back}>
                Back
                </button>
                <input class = "input" type="submit" value="Submit"></input>
                </form>
            </>

        );
    }
}

export default AllInfo;