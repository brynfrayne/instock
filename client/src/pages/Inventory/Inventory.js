import React, { useState, useEffect } from "react";
import InventoryHeroWithSearch from "../../components/InventoryHeroWithSearch/InventoryHeroWithSearch";
import InventoryTableHeader from "../../components/InventoryTableHeader/InventoryTableHeader";
import InventoryList from "../../components/InventoryList/InventoryList";
import axios from "axios";

export default function Inventory() {
  const [inventory, setInventory] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios.get(apiUrl + "/inventory").then((response) => {
      setInventory(response.data);
    });
  }, []);

  return (
    <div className="main">
      <InventoryHeroWithSearch inventoryTitle={["Inventory"]} />
      <InventoryTableHeader
        inventoryHeaders={[
          "Inventory Item",
          "Category",
          "Status",
          "QTY",
          "Warehouse",
          "Actions",
        ]}
      />
      <InventoryList inventories={inventory} />
    </div>
  );
}

