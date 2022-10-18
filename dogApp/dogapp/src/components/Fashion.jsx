import { useState } from "react";

//destructuring props below  {favourite} instead of {props.favourite})
export default function Fashion({name}) {
    const [showOutfit, setShowOutfit] = useState(false);

    //creating a function to pass into button onClick
    const toggleImage = () => setShowOutfit(!showOutfit);

    return (
        <>
        <p>This is the Fashion component. Fashion is very important in the canine world. It takes  app as props but it sets its own state to conditionally render or hide a picture when you toggle the button.</p>
        {/* // <p>Your favourite dog {name} is {age} years old and needs a suitable costume.</p>. */}
        <button onClick={toggleImage}>Toggle to show or hide {name}'s new look</button>
        {showOutfit && <img className="smallimg" src={"images/" + name + "2.jpg"} alt="Snazzy"/>}
        {/* <p>Doesn't he look smart?</p> */}
        
        </>
    )
    // Fashion.defaultProps = {
    //     favourite: "Doug",
    //     age: 13
    // }
}