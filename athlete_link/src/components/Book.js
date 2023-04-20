import './Book.css'

import firebaseConfig from './firebaseConfig';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref ,push ,set} from 'firebase/database';

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const analytics = getAnalytics(app);

let Events = [
    {
        name: "Event 1",
        type: "Football",
        image: "https://recsports.msu.edu/_assets/images/rentablespaces/fields/MunnField3.jpg",
        min:14,
        max:22
    },
    {
        name: "Event 2",
        type: "American Football",
        image: "https://recsports.msu.edu/_assets/images/rentablespaces/fields/MunnField6.jpg",
        min:14,
        max:22
    },
    {
        name: "Event 3",
        type: "Volleyball",
        image: "https://recsports.msu.edu/_assets/images/rentablespaces/fields/EastVolleyball.jpg",
        min:4,
        max:6
    },
    {
        name: "Event 4",
        type: "Tennis",
        image: "https://recsports.msu.edu/_assets/images/rentablespaces/fields/SouthTennis11.jpg",
        min:2,
        max:8,
    },
    {
        name: "Event 5",
        type: "Basketball",
        image: "https://recsports.msu.edu/_assets/images/photos/DemHall-new.jpg",
        min:10,
        max:24
    },
    {
        name: "Event 6",
        type: "Football",
        image: "https://recsports.msu.edu/_assets/images/rentablespaces/fields/MunnField3.jpg",
        min:14,
        max:22
    },
    {
        name: "Event 7",
        type: "Football",
        image: "https://recsports.msu.edu/_assets/images/rentablespaces/fields/MunnField3.jpg",
        min:14,
        max:22
    },
]


    const setTarget = () => {
        console.log("setting target")
        const target_imag = document.querySelector("#targetImage");
        const target_name = document.querySelector("#targetName");
        const target_type = document.querySelector("#targetType");
        const target_min = document.querySelector("#targetMin");
        const target_max = document.querySelector("#targetMax"); 
        
        const targetElements = {
            target_imag,
            target_name,
            target_type,
            target_min,
            target_max
        };

        return targetElements;
            
    }

    const updateTarget = (index) => {
        //Refactored for usage between event and request hooks.
        const targetElements = setTarget();
        console.log("updating target");

        console.log("target: ", targetElements.target_name ,", index: ", index);

        targetElements.target_imag.src = Events[index].image;
        targetElements.target_name.innerHTML = Events[index].name;
        targetElements.target_type.innerHTML = Events[index].type;
        targetElements.target_min.innerHTML = Events[index].min;
        targetElements.target_max.innerHTML = Events[index].max;
    }

    const resetTarget = () =>{
        console.log("resetting target");
        const targetElements = setTarget();
        targetElements.target_imag.src = "";
        targetElements.target_name.innerHTML = "";
        targetElements.target_type.innerHTML = "";
        targetElements.target_min.innerHTML = "";
        targetElements.target_max.innerHTML = "";
    }


    const bookEvent = (index, event) => {
        console.log("bookEvent: index =", index);
        const cards = document.querySelector(".cards_box");
        const request = document.querySelector(".request");
        const cancel = document.querySelector(".cancel");
        if (index === undefined){
            console.log("bookEvent: index is undefined.")
            return;
        }
        updateTarget(index);

        cards.style.display = "none";
        request.style.display = "block";
        cancel.style.display = "block";

        writeUserData();
        function writeUserData(){
            const db= getDatabase();

            set(ref(db, `booking/`),{
                eventImage: Events[index].image,
                eventName: Events[index].name,
                eventType: Events[index].type,
                eventMin: Events[index].min,
                eventMax: Events[index].max,
            });

        }
    }

    const request = (index) => {
        console.log(index);

        const cards = document.querySelector(".cards_box");
        const request = document.querySelector(".request");
        const cancel = document.querySelector(".cancel")

        cards.style.display = "block";
        request.style.display = "none";
        cancel.style.display = "none";

        alert("Your request has been submitted.");
        resetTarget();


    }

    const cancel =() =>{
        const cards = document.querySelector(".cards_box");
        const request = document.querySelector(".request");
        const cancel = document.querySelector(".cancel");

        cards.style.display = "block";
        request.style.display = "none";
        cancel.style.display = "none";
    }
const book = () => {
    return (
        <div className='box'>
            <div className='content'>
                <div className='text'>Find an Event</div>
                <div className='target'>
                    <div className='trgt'>
                        <div className='card'>
                            <img src="" id="targetImage" alt=""/>
                            <div className="name" id="targetName"></div>
                            <div className="type" id="targetType"></div>
                            <div className="min" id="targetMin"></div>
                            <div className="max" id="targetMax"></div>

                        </div>

                    </div>
                </div>

                <div className="cards">
                    <div className='cards_box'>
                        {Events.map((eventName, index)=>(
                            <div className ="card" key={index} onClick={() => bookEvent(index)}>
                                <img src={eventName.image} alt={eventName.name}/>
                                <div className="event_name">{eventName.name}</div>
                                <div className="sport_type"> {eventName.type}</div>
                                <div className="player_reg">Minimum: {eventName.min} players</div>
                                <div className="player_max">Maximum: {eventName.max} players</div>
                            </div>
                        ))}
                    </div>

                    <div className = "request">
                        <button className = "btn" onClick={request}>Register</button>
                    </div>
                    <div className = "cancel">
                        <button className = "btn" onClick={cancel}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default book;