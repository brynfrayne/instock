import React from 'react';
import "./ItemForm.scss";

// will need to add state in order to hide and show "quantity" input field

function ItemForm() {
    return (
        <form className="item-form">
            <div className="item-form__wrapper">
                <section className="item-form__section">
                    <h3 className="item-form__title">Item Details</h3>
                    <label htmlFor="name" className="item-form__label">Item Name</label>
                    <input 
                        type="text" 
                        name="name"
                        id="name"
                        className="item-form__input" 
                        placeholder="PLACEHOLDER"
                    />
                    <label htmlFor="description" className="item-form__label">Description</label>
                    <textarea 
                        name="description" 
                        id="description" 
                        className="item-form__input item-form__input--textarea"
                        placeholder="PLACEHOLDER">
                    </textarea>
                    <label htmlFor="category" className="item-form__label">Category</label>
                    <select name="category" id="category" className="item-form__input" >
                        <option value="Electronics">Electronics</option>
                        <option value="Gear">Gear</option>
                    </select>
                </section>
                <section className="item-form__section item-form__section--secondary">
                <h3 className="item-form__title">Item Availability</h3>
                    <div className="item-form__radio-section">
                        <p className="item-form__label item-form__label--radio">Status</p>
                        <div className="item-form__radio-wrapper">
                            <input 
                                type="radio" 
                                id="InStock" 
                                name="radiobutton" 
                                value="InStock"
                                className="item-form__radio-button"
                            />
                            <label htmlFor="InStock">In stock</label>
                        </div>
                        <div className="item-form__radio-wrapper">    
                            <input 
                                type="radio" 
                                id="OutOfStock" 
                                name="radiobutton" 
                                value="OutOfStock"
                                className="item-form__radio-button"
                            />
                            <label htmlFor="OutOfStock">Out of stock</label>
                        </div>
                    </div>
                    <div className="item-form__quantity-wrapper">
                        <label htmlFor="quantity" className="item-form__label">Quantity</label>
                        <input 
                            type="number" 
                            name="quantity"
                            id="quantity"
                            className="item-form__input" 
                            placeholder="PLACEHOLDER"
                        />
                    </div>
                    <label htmlFor="warehouse" className="item-form__label">Warehouse</label>
                    <input 
                        type="text" 
                        name="warehouse"
                        id="warehouse"
                        className="item-form__input" 
                        placeholder="PLACEHOLDER"
                    />
                </section>
            </div>
                <div className="item-form__CTA-container">
                    <button className="item-form__button-secondary">Cancel</button>
                    <button className="item-form__button">PLACEHOLDER</button>
                </div>
        </form>
        
    )
}

export default ItemForm;