import React from 'react';
import './App.css';


function App() {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img src="https://www.logodesign.net/logo/crossed-steel-pillars-2472ld.png"></img>
            </header>
            <div className='nav'>
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>

            </div>
            <div className='content'>
                <div>
                    <img src="https://w.forfun.com/fetch/1f/1f2f6017fe992dd00493d3cda4d808fe.jpeg"/>
                </div>
                <div>
                    ava+descript
                </div>
                <div>
                    my posts
                </div>
                <div>
                    new_post
                </div>
                <div>
                    old_post
                </div>
                <div>
                    <div>
                        post_1
                    </div>
                    <div>
                        post_2
                    </div>
                </div>
            </div>


        </div>
    );
}


export default App;
