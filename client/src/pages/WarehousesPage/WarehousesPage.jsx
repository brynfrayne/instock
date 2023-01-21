import React, { useState, useEffect } from "react";
import axios from "axios";
import HeroWithSearch from "../../components/HeroWithSearch/HeroWithSearch";
import TableHeader from "../../components/TableHeader/TableHeader";
import WarehouseListTable from '../../components/WarehouseListTable/WarehouseListTable';


export default function WarehousesPage() {
    const [warehouseList, setWarehouseList] = useState(null);
    const apiUrl = process.env.REACT_APP_API_URL;

    useEffect(() => {
        document.title = "Warehouses"
        axios.get(`${apiUrl}/warehouses`)
        .then((response) => {
          setWarehouseList(response.data);
        })
        .catch((error) => {
          console.log(error);
        })
    }, []);

    return (
        !warehouseList ? <div>loading...</div> :
        <main>
          <div className="main">
            <HeroWithSearch title={"Warehouses"}/>
            <TableHeader titles={["warehouse", "address", "contact name", "contact information", "actions"]}/>
            <WarehouseListTable warehouses={this.state.warehouseList}/>
          </div>
        </main>
    )
}
