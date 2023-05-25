import { useState } from "react";

function AddItems(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");

  const AddButton = (event) => {
    event.preventDefault();
    props.AddItems({ name, price, type, brand });
    setName("");
    setPrice(0);
    setType("");
    setBrand("");
  };

  return (
    <div className="container">
      <div className="row">
        <h2>Add an Item</h2>
      </div>
      <div className="row">
        <label htmlFor="name-field">Name:</label>
        <input
          id="name-field"
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <label htmlFor="price-field">Price:</label>
        <input
          id="price-field"
          type="number"
          className="form-control"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        ></input>
        <label htmlFor="type-field">Type:</label>
        <input
          id="type-field"
          type="text"
          className="form-control"
          value={type}
          onChange={(e) => setType(e.target.value)}
        ></input>
        <label htmlFor="brand-field">Brand:</label>
        <input
          id="brand-field"
          type="text"
          className="form-control"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        ></input>
        <div className="row mt-3">
          <button type="button" className="btn btn-primary" onClick={AddButton}>
            Add Item
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddItems;
