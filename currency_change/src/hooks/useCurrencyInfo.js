import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    const API_URL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`;

    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))
            .catch((error) => console.error("Error Occurred", error));
        console.log(currency)
    }, [currency]);

    return data;
}

export default useCurrencyInfo;
