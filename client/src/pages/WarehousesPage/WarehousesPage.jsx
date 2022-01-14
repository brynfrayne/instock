import React, { Component } from 'react';
import axios from "axios";
import HeroWithSearch from "../../components/HeroWithSearch/HeroWithSearch";
import TableHeader from "../../components/TableHeader/TableHeader";
import WarehouseListTable from '../../components/WarehouseListTable/WarehouseListTable';

export default class WarehousesPage extends Component {
    state = {
        warehouseList: [
          {
            "id": "2922c286-16cd-4d43-ab98-c79f698aeab0",
            "name": "Manhattan",
            "address": "503 Broadway",
            "city": "New York",
            "country": "USA",
            "contact": {
              "name": "Parmin Aujla",
              "position": "Warehouse Manager",
              "phone": "+1 (646) 123-1234",
              "email": "paujla@instock.com"
            }
          },
          {
            "id": "5bf7bd6c-2b16-4129-bddc-9d37ff8539e9",
            "name": "King West",
            "address": "469 King Street West",
            "city": "Toronto",
            "country": "CAN",
            "contact": {
              "name": "Greame Lyon",
              "position": "Warehouse Manager",
              "phone": "+1 (646) 123-1234",
              "email": "glyon@instock.com"
            }
          },
          {
            "id": "90ac3319-70d1-4a51-b91d-ba6c2464408c",
            "name": "Granville",
            "address": "455 Granville Street",
            "city": "Vancouver",
            "country": "CAN",
            "contact": {
              "name": "Brad MacDonald",
              "position": "Warehouse Manager",
              "phone": "+1 (646) 123-1234",
              "email": "bmcdonald@instock.com"
            }
          },
          {
            "id": "bfc9bea7-66f1-44e9-879b-4d363a888eb4",
            "name": "San Fran",
            "address": "890 Brannnan Street",
            "city": "San Francisco",
            "country": "USA",
            "contact": {
              "name": "Gary Wong",
              "position": "Warehouse Manager",
              "phone": "+1 (646) 123-1234",
              "email": "gwong@instock.com"
            }
          },
          {
            "id": "89898957-04ba-4bd0-9f5c-a7aea7447963",
            "name": "Santa Monica",
            "address": "520 Broadway",
            "city": "Santa Monica",
            "country": "USA",
            "contact": {
              "name": "Sharon Ng",
              "position": "Warehouse Manager",
              "phone": "+1 (646) 123-1234",
              "email": "sng@instock.com"
            }
          },
          {
            "id": "ade0a47b-cee6-4693-b4cd-a7e6cb25f4b7",
            "name": "Seattle",
            "address": "1201 Third Avenue",
            "city": "Seattle",
            "country": "USA",
            "contact": {
              "name": "Daniel Bachu",
              "position": "Warehouse Manager",
              "phone": "+1 (646) 123-1234",
              "email": "dbachu@instock.com"
            }
          },
          {
            "id": "bb1491eb-30e6-4728-a5fa-72f89feaf622",
            "name": "Montreal",
            "address": "1125 Stanley Street",
            "city": "Montreal",
            "country": "CAN",
            "contact": {
              "name": "Alana Thomas",
              "position": "Warehouse Manager",
              "phone": "+1 (646) 123-1234",
              "email": "athomas@instock.com"
            }
          },
          {
            "id": "150a36cf-f38e-4f59-8e31-39974207372d",
            "name": "Boston",
            "address": "215 Essex Street",
            "city": "Boston",
            "country": "USA",
            "contact": {
              "name": "Vanessa Mendoza",
              "position": "Warehouse Manager",
              "phone": "+1 (646) 123-1234",
              "email": "vmendoza@instock.com"
            }
          }
      ],
    }

    componentDidMount() {
        document.title = "Warehouses"
        axios.get("http://localhost:8080/warehouses")
        .then((response) => {
          this.setState({
            warehouseList: response.data,
          })
        })
        .catch((error) => {
          console.log(error);
        })
    }

    render() {
        return (
            <main>
                <HeroWithSearch />
                <TableHeader titles={["warehouse", "address", "contact name", "contact information", "actions"]}/>
                <WarehouseListTable warehouses={this.state.warehouseList}/>
            </main>
        )
    }
}
