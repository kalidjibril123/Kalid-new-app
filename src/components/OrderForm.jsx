import {useState} from "react";

function OrderForm(){

const [width,setWidth]=useState("");
const [height,setHeight]=useState("");
const [price,setPrice]=useState("");

function calculate(){

let area=Number(width)*Number(height);
setPrice(area*5000);

}


return(
<div>

<h3>Order Calculator</h3>

<input 
placeholder="Bal'ina"
onChange={e=>setWidth(e.target.value)}
/>

<input
placeholder="Dheerina"
onChange={e=>setHeight(e.target.value)}
/>

<button onClick={calculate}>
Herregi
</button>

<h2>Gatii: {price} Birr</h2>

</div>
)

}

export default OrderForm;
