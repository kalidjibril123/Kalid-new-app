import { useState } from "react";

function OrderForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [price, setPrice] = useState(0);

  function calculate() {
    const area = Number(width) * Number(height);
    setPrice(area * 5000);
  }

  return (
    <div>
      <h2>Ajaja Haaraa</h2>

      <input
        placeholder="Maqaa Maamilaa"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br /><br />

      <input
        placeholder="Lakkoofsa Bilbilaa"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <br /><br />

      <input
        placeholder="Bal'ina (m)"
        value={width}
        onChange={(e) => setWidth(e.target.value)}
      />
      <br /><br />

      <input
        placeholder="Dheerina (m)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <br /><br />

      <button onClick={calculate}>Herregi</button>

      <h2>Gatii: {price} Birr</h2>
    </div>
  );
}

export default OrderForm;
