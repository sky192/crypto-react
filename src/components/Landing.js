import React, { useState, useEffect } from "react";
import { getCoins } from "../services/api";

const Landing = () => {
    useEffect(() => {
        const fetchAPI = async () => {
            const data = await getCoins();
            console.log(data);
        };

        fetchAPI();
    }, []);

    return <div>Landing</div>;
};

export default Landing;
