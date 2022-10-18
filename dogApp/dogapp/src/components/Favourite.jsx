import { useState } from "react";
import Treats from "./Treats";

//destructuring props below (although there's only one! Means you can use {name} instead of {props.name})
export default function Favourite({name}) {
    const [dougTreat, setDougTreat] = useState(0);
    const [odieTreat, setOdieTreat] = useState(0);

    console.log(odieTreat);
    console.log(dougTreat);

    return (
        <>
        {/* <p>This is the Favourite component, it receives state data about which your favourite dog is from the app as props but it sets its own state for treats</p> */}
        
        {name === "Doug" &&
        <div>
        <p>Your favourite dog is {name}</p> 
        <button onClick={() => setDougTreat(dougTreat + 1)}>Click to give {name} a treat</button>
        <p>{name} has {dougTreat} treats</p>
        <Treats number={dougTreat} />
        </div>
        }
        {name === "Odie" &&
        <div>
        <p>Your favourite dog is {name}</p>
        <button onClick={() => setOdieTreat(odieTreat + 1)}>Click to give {name} a treat</button>
        <p>{name} has {odieTreat} treats</p>
        <Treats number={odieTreat} />
        </div>
        }
       
        </>

    )
}