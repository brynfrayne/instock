
import React, { useState, useEffect } from 'react'
import axios from "axios";
import uniqid from "uniqid";
import "./ItemForm.scss";

export default function ItemForm({ inventoryId }) {
    const apiUrl = process.env.REACT_APP_API_URL;
    const [warehouses, setWarehouses] = useState([]);
    const [currentItem, setCurrentItem] = useState(null);
    const [isInStock, setIsInStock] = useState(null);
    const [stockValue, setStockValue] = useState(null);

    useEffect(() => {
        document.title = "Edit Inventory Item"
        axios.get(`${apiUrl}/inventory/${inventoryId}/item`)
            .then((response) => {
                setCurrentItem(response.data);
                setIsInStock(response.data.status === "In Stock" ? true : false);
                setStockValue(response.data.status);
            })
            .catch((err) => {
                console.log(err)
            });
        axios.get(`${apiUrl}/inventory`)
            .then((response) => {
                setWarehouses(response.data);
            })
    }, [inventoryId]);

    const handleSubmit = (event) => {
        axios.put(`${apiUrl}/inventory/${inventoryId}`, {
            name: event.target.name.value,
            description: event.target.description.value,
            category: event.target.category.value,
            radioButton: event.target.radioButton.value,
            quantity: event.target.quantity.value || 0,
            warehouse: event.target.warehouse.value
        })
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    const handleCancel = () => {
        window.location.reload();
    }

    const handleRadio = () => {
        setIsInStock(!isInStock);
    }

    if(currentItem === null) {
        return <div>Loading...</div>
    }

    const mappedWarehouses = warehouses.map((warehouse) => warehouse.warehouseName);

    const filteredWarehouses = mappedWarehouses.filter((warehouseName, index) => mappedWarehouses.indexOf(warehouseName) === index);

    const mappedWarehousesCategory = warehouses.map((warehouse) => warehouse.category);

    const filteredWarehousesCategory = mappedWarehousesCategory.filter((category, index) => mappedWarehousesCategory.indexOf(category) === index);
    return (
        <form className="item-form" onSubmit={handleSubmit}>
        <div className="item-form__wrapper">
            <section className="item-form__section">
                <h3 className="item-form__title">Item Details</h3>
                <label htmlFor="name" className="item-form__label">Item Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className="item-form__input"
                    placeholder={currentItem.itemName}
                />
                <label htmlFor="description" className="item-form__label">Description</label>
                <textarea
                    name="description"
                    id="description"
                    className="item-form__input item-form__input--textarea"
                    placeholder={currentItem.description}>
                </textarea>
                <label htmlFor="category" className="item-form__label">Category</label>
                <select name="category" id="category" className="item-form__input" >
                    {filteredWarehousesCategory.map((category) =>{
                    return( <option key={uniqid()} value={category}>{category}</option>)
                    })}
                </select>
            </section>
            <section className="item-form__section item-form__section--secondary">
            <h3 className="item-form__title">Item Availability</h3>
            <div className="item-form__radio-section">
                            <p className="item-form__label item-form__label--radio">Status</p>
                            <div className="item-form__radio-wrapper">
                                <input onChange={handleRadio} defaultChecked={isInStock} type="radio" id="InStock" name="radioButton" value={stockValue} className="item-form__radio-button"/>
                                <label htmlFor="InStock">In stock</label>
                            </div>
                            <div className="item-form__radio-wrapper">
                                <input onChange={handleRadio} defaultChecked={!isInStock} type="radio" id="OutOfStock" name="radioButton" value={stockValue}  className="item-form__radio-button" />
                                <label htmlFor="OutOfStock">Out of stock</label>
                            </div>
                        </div>
                {isInStock
                    ?   <div className="item-form__quantity-wrapper">
                            <label htmlFor="quantity" className="item-form__label">Quantity</label>
                            <input
                                type="number"
                                name="quantity"
                                id="quantity"
                                className="item-form__input"
                                placeholder={currentItem.quantity}
                            />
                        </div>
                    :   " "
                }
                <label htmlFor="warehouse" className="item-form__label">Warehouse</label>
                <select name="warehouse" id="warehouse" className="item-form__input" >
                    {filteredWarehouses.map((warehouse) => {
                        return(
                            <option key={uniqid()} value={warehouse} >
                                {warehouse}
                            </option>
                        )
                    })}
                </select>
            </section>
        </div>
            <div className="item-form__CTA-container">
                <button onClick={handleCancel} name="secondary" className="item-form__button-secondary">Cancel</button>
                <button type="submit"className="item-form__button">Save</button>
            </div>
    </form>
    )
}



