import React, { useState, useEffect } from 'react';
import Product from "../components/common/product";
import serverAddress from "../serverConnection";
import Loading from "../components/common/loading";

import "../css/home.css";
import {
    useParams
} from "react-router-dom";
const Home = () => {

    const [loading, setLoading] = useState(true);
    const [list, setList] = useState([]);
    const { id } = useParams();



    useEffect(() => {
        function getList() {
            fetch(serverAddress + `api/product/type/${id}`, {
                method: "get",
                headers: { "Content-Type": "application/json" },
            })
                .then((res) => res.json())
                .then((data) => {
                    setLoading(false);
                    setList(data);
                })
                .catch(console.log);

        }
        getList();
    }, [id]);

    if (loading || list.length === 0) {
        return Loading();
    }


    function title() {
        switch (id) {
            case "1":
                return "Thời trang";
            case "2":
                return "Thực phẩm";
            case "3":
                return "Đồ điện tử";
            case "4":
                return "Sách";
            case "5":
                return "Chăm sóc da";

            default:
                return "";
        }
    }


    return (
        <div className="my-container">

            <div className="top-product">
                <div className="top-product-header">
                    <div style={{ color: "black" }} className="top-product-title">{title()}</div>

                </div>
                <div className="container-fluid">
                    <div className="row">
                        {
                            list.map((item, i) => (

                                <div className="col-xl-3 col-lg-4  col-sm-6">

                                    <Product key={`home-product-${i}`} data={item} />

                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>

        </div>


    );

}
export default Home;
