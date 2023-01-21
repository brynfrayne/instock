import InventoryItemHero from '../../components/InventoryItemHero/InventoryItemHero';
import "./InventoryItemPage.scss";
import axios from 'axios';
import { useState, useEffect } from 'react';


export default function InventoryItemPage({match}) {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const apiUrl = process.env.REACT_APP_API_URL;

    useEffect(() => {
        const id = match.params.itemId;
        axios.get(`${apiUrl}/inventory/${id}/item`)
            .then((response) => {
                setItem(response.data);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            {loading ? (
                <span>Loading...</span>
            ) : (
        <div className="main">
           <InventoryItemHero  title={this.state.item.itemName} inventoryId={this.props.match.params.itemId}/>
            <div className="inventory-item">
                <div className="inventory-item__columns inventory-item__columns--left">
                    <div>
                        <p className="inventory-item__text--title">ITEM DESCRIPTION</p>
                        <p className="inventory-item__text">{this.state.item.description}</p>
                    </div>
                    <div>
                        <p className="inventory-item__text--title">CATEGORY</p>
                        <p className="inventory-item__text">{this.state.item.category}</p>
                    </div>
                </div>

                <div className="inventory-item__columns">
                    <div className="inventory-item__status-quantity-container">
                        <div className="inventory-item__status-quantity">
                            <p className="inventory-item__text--title" >STATUS</p>
                            <p className="inventory-item__text">{this.state.item.status}</p>
                        </div>
                        <div className="inventory-item__status-quantity">
                            <p className="inventory-item__text--title">QUANTITY</p>
                            <p className="inventory-item__text">{this.state.item.quantity}</p>
                        </div>
                    </div>
                    <div>
                        <p className="inventory-item__text--title">WAREHOUSE</p>
                        <p className="inventory-item__text">{this.state.item.warehouseName}</p>
                    </div>
                </div>
            </div>
        </div>
)}
</div>
    )
}
