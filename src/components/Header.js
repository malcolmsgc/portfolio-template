import React from 'react';
import picPlaceholder from '../assets/profile-placeholder.jpeg';

const Header = (props) => {
    const dummyIntroJSX = (
        <div>
            <p>Spicy jalapeno bacon ipsum dolor amet dolore frankfurter fatback anim drumstick.
            Eu tenderloin culpa, ground round t-bone lorem kielbasa ut pork. Nisi in quis culpa,
            laboris strip steak turkey non ut. Culpa consectetur cupidatat andouille pig bresaola.
            Pariatur et dolor porchetta tenderloin, tri-tip tongue. Andouille eiusmod mollit,
            chicken drumstick officia ea venison kielbasa commodo.
            Strip steak corned beef burgdoggen ipsum flank sirloin leberkas ball tip consequat tempor pancetta jowl ad excepteur.</p>
            <p>Strip steak et deserunt nostrud incididunt capicola. Andouille commodo tongue ipsum pancetta,
            officia ground round labore tempor ea. Sausage cillum tongue id in. Salami dolore picanha esse nulla.</p>
        </div>
    );
    return (
        <header>
            <div id="about">
                <h1>{props.about.title.length > 0 ? props.about.title : "My Portfolio"}</h1>
                {props.about.about ? props.about.about : dummyIntroJSX}</div>
            <div>
                <img src={props.about.imgSrc.length > 0 ? props.about.imgSrc : picPlaceholder} alt=" " />
            </div>
        </header>
    );
}

export default Header;
