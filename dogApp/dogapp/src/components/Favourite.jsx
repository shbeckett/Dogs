import { useState } from "react";
import Treats from "./Treats";

//destructuring props below (although there's only one! Means you can use {name} instead of {props.name})
export default function Favourite({name}) {
    const [treat, setTreat] = useState(0);

    return (
        <>
        <p>This is the Favourite component, it receives state data about which your favourite dog is from the app as props but it sets its own state for treats</p>
        <p>Your favourite dog is... {name}</p>
        <button onClick={() => setTreat(treat + 1)}>Click to give {name} a treat</button>
        <p>{name} has {treat} treats</p>
        <Treats number={treat} />
        </>
    )
}