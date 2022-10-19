export default function Economics (props) {

    //using fecth() to query world bank API

    fetch('http://api.worldbank.org/v2/indicators/NY.GDP.MKTP.CD?format=json')
  .then((response) => response.json())
  .then((data) => console.log(data));
}