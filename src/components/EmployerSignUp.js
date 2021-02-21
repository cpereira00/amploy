import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class EmployerSignUp extends Component{

    render(){

        const {CompanyName, empEmail, password} = this.props;

        return(
            <>
            <form> 
            
                <h2> Enter Your Company Info</h2>
                <label class = "label">
                    <input 
                        class = "input"
                        type="text"
                        name="CompanyName"
                        value = {CompanyName}
                        placeholder="Company Name"
                        
                    />
                </label>
                <label class = "label">
                    <input 
                        class = "input"
                        type="text"
                        name="empEmail"
                        value={empEmail}
                        placeholder="Email"
                        
                    />
                </label>
                <label class = "label">
                    <input 
                        class = "input"
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Password"
                        
                    />
                </label>
               
                    <Link to = '/'> <input class = "input" type="submit" value="Submit"/> </Link>

                    <Link to = '/'><a>Are you an Employee?</a> </Link>

                    </form>
            </> 
        );
    }

}

export default EmployerSignUp
