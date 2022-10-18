import { useState } from "react";
import Treats from "./Treats";

//destructuring props below (although there's only one! Means you can use {name} instead of {props.name})
export default function Favourite({name}) {
    const [treat, setTreat] = useState(0);
    const [dougTreat, setDougTreat] = useState(0);
    const [odieTreat, setOdieTreat] = useState(0);

    console.log(odieTreat);
    console.log(dougTreat);

    return (
        <>
        <p>This is the Favourite component, it receives state data about which your favourite dog is from the app as props but it sets its own state for treats</p>
        <p>Your favourite dog is... {name}</p>
        {name == "Doug" &&
        <div>
        <button onClick={() => setDougTreat(dougTreat + 1)}>Click to give {name} a treat</button>
        <p>{name} has {dougTreat} treats</p>
        </div>
        }
        {name == "Odie" &&
        <div>
        <button onClick={() => setOdieTreat(odieTreat + 1)}>Click to give {name} a treat</button>
        <p>{name} has {odieTreat} treats</p>
        </div>
        }
        <Treats number={(name+"Treat")} />
        </>

        // <>
        // <p>This is the Favourite component, it receives state data about which your favourite dog is from the app as props but it sets its own state for treats</p>
        // <p>Your favourite dog is... {name}</p>
        // <button onClick={() => setTreat(treat + 1)}>Click to give {name} a treat</button>
        // <p>{name} has {treat} treats</p>
        // <Treats number={treat} />
        // </>
    )
}