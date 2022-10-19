export default function Dogpals(props) {
    const dogs = ["Doug", "Odie", "Molly", "Tip", "Merlin"];
    const doglist = dogs.map((dog) =>
        //list should have a key - ideally id
        <li>{dog}</li>
    );
    return (
        <ul>{doglist}</ul>
    );
}