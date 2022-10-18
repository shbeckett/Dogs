import Card from 'react-bootstrap/Card';
 
export default function Profile(props) {
    return (
        <>
        <img className="smallimg" src={"images/" + props.name + ".jpg"} alt={"a dog called " + props.name}/>
        <p>This handsome fellow is {props.name}</p>
        <p>He is {props.age} years old.</p>
        </>
    )
}

// export default function Profile(props) {
//     return (
//         <>
//         <Card>
//         <Card.Header>This handsome fellow is {props.name}</Card.Header>
//         <Card.Img variant="top" src={"images/" + props.name + ".jpg"} alt={"a dog called " + props.name}/>
//         <Card.Body>
//         <p>He is {props.age} years old.</p>       
//         </Card.Body>
//         </Card>
//         </>
//     );
// }