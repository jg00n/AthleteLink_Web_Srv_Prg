import './AthleteHome.css';

const Home = () =>{


    return (
        <>
            <div className='container'>
                <div className='Content'>
                    <div className='text'>Book App</div>
                    <div className='form'>
                        <div className='txt'>Date & Time you would like to sign up for</div>
                        <form action="">
                            <div className='inputData'>
                                <input type="date" name="" id="book-date"/>
                            </div>
                            <div className='inputData'>
                                <input type="time" name="" id="book-time"/>
                            </div>
                            <div className='txt'>Duration of event</div>
                            <div className='inputData'>
                                <input type="date" name="" id="leave-date"/>
                            </div>
                            <div className='inputData'>
                                <input type="time" name="" id="leave-time"/>
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
