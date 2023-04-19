import './AthleteHome.css';
import firebaseConfig from './firebaseConfig.js';
import { useState } from 'react';

import { initializeApp} from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref ,push ,set} from 'firebase/database';
import BookPage from "./Book.js"

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const analytics = getAnalytics(app);

const Home = ({email}) => {
    const [valid, setValid] = useState(true)
    const [hide, setHide] = useState(true)
    const handleSubmit = (e) => {
        e.preventDefault();
        const book_date = document.getElementById('book-date');
        const book_time = document.getElementById('book-time');
        
        const leave_date = document.getElementById('leave-date');
        const leave_time = document.getElementById('leave-time');

        if(!book_date.value || !book_time.value || !leave_date.value || !leave_time.value){
            alert('Please fill all the fields');
        }else{
            writeUserData(email);

        function writeUserData(email) {
            const db = getDatabase();
            const newBookingRef =push(ref(db, `data/`)); // unique ID
            set(newBookingRef, {
            email: email,
            bookingdate: book_date.value,
            bookingtime: book_time.value,
            leave_date: leave_date.value,
            leave_time: leave_time.value,
            });
        }
            alert('Your booking has been made');
            const bookPageDiv = document.querySelector('.box');
            const container = document.querySelector('.container');
            if (bookPageDiv && container) {
              setValid(!valid + bookPageDiv.classList.add('show'));
              setHide(!hide + container.classList.add('hide'));
            }
        }
    }

    return (
        <>
            <BookPage />
            <div className='container'>
                <div className='content'>
                    <div className='text'>Book Now</div>
                    <div className='bookForm'>
                        <div className='txt'>Start Date & Time</div>
                        <form action="" onSubmit={handleSubmit}>
                            <div className='inputData'>
                                <input type="date" name="" id="book-date"/>
                            </div>
                            <div className='inputData'>
                                <input type="time" name="" id="book-time"/>
                            </div>
                            <div className='txt'>End Date & Time</div>
                            <div className='inputData'>
                                <input type="date" name="" id="leave-date"/>
                            </div>
                            <div className='inputData'>
                                <input type= "time" name="" id="leave-time"/>
                            </div>
                            <div className='book'>
                                <button type="submit">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
