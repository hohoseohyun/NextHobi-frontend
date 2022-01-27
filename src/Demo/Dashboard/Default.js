import React, { useEffect, useState } from 'react';

import Aux from "../../hoc/_Aux";
import axios from "axios";
import Listpage from "./MainItem";

function Dashboard() {
    const [setLoading] = useState(false);
    const [ItemList, setItemList] = useState([]);

    const loadItem = async () => {
        axios.get("/api/main/list?categoryType=DAILY")
            .then(({ data }) => {
                setItemList(data.data);
                setLoading(true);
            }).catch(e => {
                console.error(e); // 에러 표시
                setLoading(false);
            });
    }

    useEffect(() => {
        loadItem();
    })

    return (
        <Aux>
            <Listpage ItemCard={ItemList} />
        </Aux>
    );
}

export default Dashboard;