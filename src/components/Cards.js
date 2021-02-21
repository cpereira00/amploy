import React, {useState, useEffect} from 'react'
import TinderCard from "react-tinder-card"
import "./Cards.css"
import "./EmpyButtons.css";
import CheckIcon from '@material-ui/icons/Check';
import IconButton from "@material-ui/core/IconButton"
import ClearIcon from '@material-ui/icons/Clear';
//import axios from "./axios";

function Cards() {
    const[people, setPeople] = useState([
        {
            name:"Chris Pereira",
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/9/90/Resume_logo.jpeg"
        },
        {
            name:"Ryan Messervey",
            imgUrl: "https://www.resumecoach.com/wp-content/themes/cv-wp-theme-resumecoach/library/images/slider/cf/toronto.png"
        },
        {
            name:"Luca Catalfamo",
            imgUrl: "https://cdn-images.resumelab.com/pages/layout_resumelab_3.png"
        },
        {
            name:"Chris Digiacomo",
            imgUrl: "https://www.jobscan.co/wp-content/uploads/exec.png"
        },

    ]);
       
    // useEffect(() => {
    //     async function fetchData(){
    //         const req = await axios.get("/amploy/cards");

    //         setPeople(req.data);
    //     }

    //     fetchData();
    // }, [])


    const swiped = (direction, nameToDelete) => {
        console.log("swiped on:" + nameToDelete);
    }


    const outOfWindow = (name) => {
            console.log(name + "is gone");
    }

    return (
        <div className="cards">
            <div className='tinderCards__cardContainer'>
            {people.map((person) => (
                 <TinderCard 
                 className="swipe"
                 key={person.name}
                 preventSwipe={["up", "down"]}
                 onSwipe={(direction) => swiped(direction, person.name)}
                 onCardLeftScreen={() => outOfWindow( person.name)}
                 >
                     <div
                    style={{backgroundImage: "url("+person.imgUrl+")"}}
                    className="card"
                    >
                    <h2>{person.name}</h2>
                    </div>

                </TinderCard>
            )) }
            </div>
            
            <div className='empyButtons'>
            <IconButton> 
            <ClearIcon style={{ fontSize: 40 }} className="empyButtons__clearIcon"/> Decline
            </IconButton>

            
            <IconButton> 
            <CheckIcon style={{ fontSize: 40 }} className="empyButtons__checkIcon"/> Accept
            </IconButton>

        </div>
        </div>
        
    )
}

export default Cards
