import { useState } from "react";

//destructuring props below  {favourite} instead of {props.favourite})
// It takes name as props but it sets its own state to conditionally render or hide a picture when you toggle the button.
export default function Fashion({name}) {
    const [showOutfit, setShowOutfit] = useState(false);

    //creating a function to pass into button onClick
    const toggleImage = () => setShowOutfit(!showOutfit);

    return (
        <>
        <p>Fashion is very important in the canine world.</p>
        {/* // <p>Your favourite dog {name} is {age} years old and needs a suitable costume.</p>. */}
        <button onClick={toggleImage}>Toggle to show or hide {name}'s new look</button>
        <br/>
        {showOutfit && <img className="smallimg" src={"images/" + name + "2.jpg"} alt="Snazzy"/>}
        {/* <p>Doesn't he look smart?</p> */}
        
        </>
    )
}