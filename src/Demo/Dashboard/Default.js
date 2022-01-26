import React from 'react';

import Aux from "../../hoc/_Aux";
import axios from "axios";
import Listpage from "./MainList";
class Dashboard extends React.Component {
    state = {
        loading: false,
        ItemList: []
    };

    loadItem = async () => {
        axios.get("/api/main/list?categoryType=DAILY")
            .then(({ data }) => {
                this.setState({
                    loading: true,
                    ItemList: data.data
                });
            }).catch(e => {
                console.error(e); // 에러 표시
                this.setState({
                    loading: false
                });
            });
    }
    componentDidMount() {
        this.loadItem(); // loadItem 호출
    }

    render() {
        const { ItemList } = this.state;
        return (
            <Aux>
                <Listpage ItemCard={ItemList} />
            </Aux>
        );
    }
}

export default Dashboard;