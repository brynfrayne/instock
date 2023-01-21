import React, { useState, useEffect } from 'react';
import WarehouseDetails from '../../components/WarehouseDetails/WarehouseDetails';
import TableHeader from '../../components/TableHeader/TableHeader';
import InventoryList from '../../components/InventoryList/InventoryList';
import axios from 'axios';

export default function SpecificWarehousePage({match}) {
    const [warehouse, setWarehouse] = useState(null);
    const [inventory, setInventory] = useState([]);
    const apiUrl = process.env.REACT_APP_API_URL;

    useEffect(() => {
        const id = match.params.warehouseId;
        axios.get(`${apiUrl}/warehouses/${id}`)
        .then((response) => {
            setWarehouse(response.data);
        });
        axios.get(`${apiUrl}/inventory/${id}`)
        .then((response) => {
            setInventory(response.data);
        });
    }, []);


    return (
      <div>
        {!warehouse ? (
          <p>Loading...</p>
        ) : (
        <div className="main">
            <WarehouseDetails warehouse={this.state.warehouse}/>
            <TableHeader titles={["warehouse", "address", "contact name", "contact information", "actions"]}/>
            <InventoryList inventories={this.state.inventory} specificWarehouse={this.props.match.params} />
        </div>
        )}
      </div>
    );
}


