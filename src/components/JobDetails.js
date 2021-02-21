import React, { Component } from 'react';

class JobDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const { role, location, handleChange } = this.props;
        return(
            <>
                <h2>What Are You Looking For?</h2>
                <label class = "label">
                    <select class = "select" value={role} onChange={handleChange('role')}>
                        <option name = "role" value="Computer and I.T.">Computer and IT</option>
                        <option name = "role" value="Mangement"> Management </option>
                        <option name = "role" value="Accounting and Finance">Finance and Accounting</option>
                        <option name = "role" value="Sales and Retail">Sales and Retail</option>
                        <option name = "role" value="Customer Service">Customer Service</option>
                        <option name = "role" value="Manufacturing and Warehouse">Manufacturing and Warehouse</option>
                        <option name = "role" value="Business Operations">Business Operations</option>
                        <option name = "role" value="Administration/Office">Administration/Office</option>
                        <option name = "role" value="Other">Other</option>
                    </select>
                </label>
               
                <label class = "label">
                    <input 
                        class = "input"
                        type="text"
                        name="location"
                        value={location}
                        onChange={handleChange('location')}
                        placeholder="Location"
                        
                    />
                </label>
                <button className="Back" onClick={this.back}>
                    Back
                </button>
                <button className="Next" onClick={this.continue}>
                    Next
                </button>
            </>
        );
    }
}

export default JobDetails;