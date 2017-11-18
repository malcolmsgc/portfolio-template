import React from 'react';
import profilePic from '../assets/profile-placeholder.jpeg';

const Header = (props) => {
    return (
        <header>
            <div>
                <h1>My Portfolio</h1>
                        <p>Spicy jalapeno bacon ipsum dolor amet dolore frankfurter fatback anim drumstick. Eu tenderloin culpa, ground round t-bone lorem kielbasa ut pork. Nisi in quis culpa, laboris strip steak turkey non ut. Culpa consectetur cupidatat andouille pig bresaola. Pariatur et dolor porchetta tenderloin, tri-tip tongue. Andouille eiusmod mollit, chicken drumstick officia ea venison kielbasa commodo. Strip steak corned beef burgdoggen ipsum flank sirloin leberkas ball tip consequat tempor pancetta jowl ad excepteur.</p>
                        <p>Strip steak et deserunt nostrud incididunt capicola. Andouille commodo tongue ipsum pancetta, officia ground round labore tempor ea. Sausage cillum tongue id in. Salami dolore picanha esse nulla.</p>
            </div>
            <div>
                <img src={profilePic} alt="Your profile pic goes here" />
            </div>
        </header>
    );
}

export default Header;
