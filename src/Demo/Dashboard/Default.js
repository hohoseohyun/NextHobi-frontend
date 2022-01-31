import React, { useEffect, useState } from 'react';
import { InputGroup, DropdownButton, Dropdown } from 'react-bootstrap';
import Aux from "../../hoc/_Aux";
import * as mainSvc from "../../services/main"
import Listpage from "./MainItem";

function Dashboard() {
    const [ItemList, setItemList] = useState([]);

    const loadItem = async () => {
        mainSvc.getMainList('DAILY')
            .then(({ data }) => {
                setItemList(data);
            });
    }

    useEffect(() => {
        loadItem();
    }, [])

    return (
        <Aux>
            <DropdownButton as={InputGroup.Prepend} title="Dropdown" id="input-group-dropdown-1">
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Separated link</Dropdown.Item>
            </DropdownButton>
            <Listpage ItemCard={ItemList} />
        </Aux>
    );
}

export default Dashboard;