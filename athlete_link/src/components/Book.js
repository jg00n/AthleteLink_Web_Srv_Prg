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




const book = () => {
    return (
        <div className='box'>
            <div className='content'>
                <div className='text'>Find an Event</div>
                <div className='target'>
                    <div className='trgt'>
                        <div className='card'>
                            <img src="" id="targetImage" alt=""/>
                            <div className="event_name" id="targetName"></div>
                            <div className="price" id="targetPrice"></div>
                        </div>

                    </div>
                </div>

                <div className="cards">
                    <div className='card_box'>
                        <div className ='card'>
                            <img src="" alt="event1"/>
                            <div className="event_name"></div>
                            <div className="sport_type"></div>
                            <div className="player_reg"></div>
                            <div className="player_max"></div>
                        </div>

                        <div className ='card'>
                            <img src="" alt="event2"/>
                            <div className="event_name"></div>
                            <div className="sport_type"></div>
                            <div className="player_reg"></div>
                            <div className="player_max"></div>
                        </div>

                        <div className ='card'>
                            <img src="" alt="event3"/>
                            <div className="event_name"></div>
                            <div className="sport_type"></div>
                            <div className="player_reg"></div>
                            <div className="player_max"></div>
                        </div>

                        <div className ='card'>
                            <img src="" alt="event5"/>
                            <div className="event_name"></div>
                            <div className="sport_type"></div>
                            <div className="player_reg"></div>
                            <div className="player_max"></div>
                        </div>

                        <div className ='card'>
                            <img src="" alt="event6"/>
                            <div className="event_name"></div>
                            <div className="sport_type"></div>
                            <div className="player_reg"></div>
                            <div className="player_max"></div>
                        </div>

                        <div className ='card'>
                            <img src="" alt="event7"/>
                            <div className="event_name"></div>
                            <div className="sport_type"></div>
                            <div className="player_reg"></div>
                            <div className="player_max"></div>
                        </div>
                    </div>

                    <div className = "request">
                        <button className = "btn">Register</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default book;