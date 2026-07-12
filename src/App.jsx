import Header from "../Header";
import OrderForm from "../OrderForm";
import "./style.css";
import { Analytics } from '@vercel/analytics/react';

function App(){

return(
<div>
<Header/>

<h1>Kalid New App</h1>

<p>
Kalid Jibril Metal & Wood Work
</p>

<OrderForm/>

<Analytics />

</div>
)

}

export default App;
