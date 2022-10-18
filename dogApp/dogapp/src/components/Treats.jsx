export default function Treats({number}) {
  return [...Array(number)].map((e, i) => <span key={i}><img className="tinyimg" src="images/bones.png" alt="a dog treat"/></span>);
}
// using Array(number) to create empty array with number of slots, then usiing spread operator to copy it. Map() returns span elements with unique key so that react can keep track of them