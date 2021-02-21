import React from 'react'

import './Account.css';
import {Link} from 'react-router-dom';

function Account() {
    return (
        <form>   
            <div className = "Account">
               
                <h1>Your Profile</h1>
                
                <div className = "formGroup">
                    <label htmlFor="first-name">First Name:</label>
                    <input type="first-name" name="first-name" id="first-name" placeholder = "John"/>
                </div>    
                <div className = "formGroup">
                    <label htmlFor="last-name">Last Name:</label>
                    <input type="last-name" name="last-name" id="last-name" placeholder = "Smith"/>
                </div>

                <div className = "coverGroup">
                    <label htmlFor = "cover"> Cover Letter Paragraph </label>
                    <textarea name="" id="" cols="30" rows="10" placeholder = "Tell us about yourself..."></textarea>
                </div>

                <input type='file' style ={{marginTop:10}}/>               
                <input type="submit" value="Save"/> 
                <dropdown/>

            </div>
        </form> 
        
    )
}
export default Account