import axios from "axios";
import React, { useState, useEffect } from "react";
import "./AddInventoryItem.scss";
import uniqid from "uniqid";
import error from "../../assets/icons/error-24px.svg";



// will need to add state in order to hide and show "quantity" input field

export default function AddInventoryItem() {
  const [warehouses, setWarehouses] = useState([]);
  const [inventoryItemToAdd, setInventoryItemToAdd] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios.get(`${apiUrl}/inventory`.then((response) => {
      setWarehouses(response.data);
    }));
  }, []);

  const addInventoryItem = (event) => {
    event.preventDefault();

    if(!event.target.itemName.value ||
       !event.target.description.value ||
       !event.target.category.value ||
       !event.target.status.value ||
       !event.target.quantity.value ||
       !event.target.warehouse.value
       ){
        const input = document.getElementsByClassName('item-form__input')
        for (let i = 0; i < input.length; i++) {
          input[i].style.borderColor = "red";
        };
        const span = document.getElementsByTagName('span');
        for (let i = 0; i<span.length; i++) {
          console.log(span[i])
          span[i].classList.remove("form-valid");
          span[i].classList.add("form-error")
        }
        return alert("Please fill in all values.");
      };

    let body = {
      itemName: event.target.itemName.value,
      description: event.target.description.value,
      category: event.target.category.value,
      status: event.target.status.value,
      quantity: event.target.quantity.value,
      warehouse: event.target.warehouse.value,
    };

    // POST request for new inventory items
    axios.post(`${apiUrl}/inventory`, body).then((response) => {
      setInventoryItemToAdd(response.data);

      // ALERT to notify of successful upload
      alert("New Inventory Item Successfully Added");
    })
  };

  return (
    <div className="main">
    <form onSubmit={addInventoryItem} className="item-form">
      <div className="item-form__wrapper">
        <section className="item-form__section">
          <h3 className="item-form__title">Item Details</h3>
          <label
            htmlFor="itemName"
            // htmlFor="name"
            className="item-form__label"
          >
            Item Name
          </label>
          <input
            type="text"
            name="name"
            id="itemName"
            className="item-form__input"
            placeholder="PLACEHOLDER"
          />
          <span className="form-valid"><img src={error} alt="error alert" className='exclamation'/>This field is required</span>

          <label htmlFor="description" className="item-form__label">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            className="item-form__input item-form__input--textarea"
            placeholder="Please enter a brief item description..."
          ></textarea>
          <span className="form-valid"><img src={error} alt="error alert" className='exclamation'/>This field is required</span>

          <label htmlFor="category" className="item-form__label">
            Category
          </label>
          <select
            name="category"
            id="category"
            placeholder="0"
            className="item-form__input"
          >
            <option value="Electronics">Electronics</option>
            <option value="Gear">Gear</option>
            <option value="Health">Health</option>
            <option value="Accessory">Accessory</option>
            <option value="Apparel">Apparel</option>
          </select>
          <span className="form-valid"><img src={error} alt="error alert" className='exclamation'/>This field is required</span>

        </section>
        <section className="item-form__section item-form__section--secondary">
          <h3 className="item-form__title">Item Availability</h3>
          <div className="item-form__radio-section">
            <p className="item-form__label item-form__label--radio">Status</p>
            <div className="item-form__radio-wrapper">
              <input
                type="radio"
                id="status"
                name="radiobutton"
                value="In Stock"
                className="item-form__radio-button"
              />

              <label htmlFor="InStock">In stock</label>
            </div>
            <div className="item-form__radio-wrapper">
              <input
                type="radio"
                id="status"
                name="radiobutton"
                value="Out Of Stock"
                className="item-form__radio-button"
              />
              <label htmlFor="OutOfStock">Out of stock</label>
            </div>
          </div>
          <span className="form-valid"><img src={error} alt="error alert" className='exclamation'/>This field is required</span>

          <div className="item-form__quantity-wrapper">
            <label htmlFor="quantity" className="item-form__label">
              Quantity
            </label>
            <input
              type="number"
              name="quantity"
              id="quantity"
              className="item-form__input"
              placeholder="0"
            />
          <span className="form-valid"><img src={error} alt="error alert" className='exclamation'/>This field is required</span>

          </div>
          <label htmlFor="warehouse" className="item-form__label">
            Warehouse
          </label>
          <select
            name="warehouse"
            id="warehouse"
            className="item-form__input"
          >
            {warehouses.map((warehouse) => (
              <option key={uniqid()} value={warehouse.warehouseName}>
                {warehouse.warehouseName}
              </option>
            ))}
          </select>
          <span className="form-valid"><img src={error} alt="error alert" className='exclamation'/>This field is required</span>

        </section>
      </div>
      <div className="item-form__CTA-container">
        <button className="item-form__button-secondary">Cancel</button>
        <button className="item-form__button">+ Add Item</button>
      </div>
    </form>
    </div>
  );
};

