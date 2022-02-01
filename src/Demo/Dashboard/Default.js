import React, { useEffect, useState } from 'react';
import { InputGroup, DropdownButton, Dropdown } from 'react-bootstrap';
import Aux from "../../hoc/_Aux";
import * as mainSvc from "../../services/main"
import Listpage from "./MainItem";

function Dashboard() {
    const [ItemList, setItemList] = useState([]);
    const [categoryType, setCategoryType] = useState('');

    const loadItem = async () => {
        mainSvc.getMainList('ALL')
            .then(({ data }) => {
                setItemList(data);
            });
    }

    useEffect(() => {
        loadItem();
    }, [])

    return (
        <Aux>
            <DropdownButton as={InputGroup.Prepend} title="카테고리" id="input-group-dropdown-1">
                <Dropdown.Item href="#">일상</Dropdown.Item>
                <Dropdown.Item href="#">먹방</Dropdown.Item>
                <Dropdown.Item href="#">뷰티</Dropdown.Item>
            </DropdownButton>
            <Listpage ItemCard={ItemList} />
        </Aux >
    );
}

export default Dashboard;