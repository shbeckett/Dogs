import { useState, useEffect } from 'react';

export default function Game(props) {
    const [game, setGame] = useState(0);

    useEffect(() => {
        console.log("you changed the game")
    


    },
    [game]);

    useEffect(() => {
        console.log("this happens when the component is rendered for the first time")
        
    },
    []); 

    useEffect(() => {
        return () => {
            console.log("You can only return a clean up function with useEffect and this happens when the component is going to unmount but this is happening every time I change the game...")
        };
    }, [game]);
    
    const options = ["skittles", "frisbee", "cat chasing", 'tail chasing', 'stick chasing', 'swimming'];
    console.log({...options});
    const moreOptions = ["post stealing", "squirrel chasing", ...options, "food stealing"];
    console.log({...moreOptions});
    const mergedOptions = [...options, ...moreOptions];
    console.log({...mergedOptions});
    const names = "Doug and Odie";
    const processedNames = [...names];
    console.log(processedNames);
    // Playing with the spread operator to access the contents of an array and to merge arrrays / insert arrays within others it even works with strings
        return (
        <>
        <p>Dogs love to play games.</p>
        {/* <p>These hounds particularly like {...options}</p> */}
        <p>Doug and Odie are currently playing {moreOptions[game]}</p>
        <button onClick={() => setGame(game + 1)}>New game</button>
        </>
    )
}