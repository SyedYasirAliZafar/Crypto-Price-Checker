import { createContext, useEffect, useState } from "react";

export const CoinContext = createContext();

const CoinContextProvider = (props) => {
  const [allCoin, setAllCoin] = useState([]);
  const [currency, setCurrency] = useState({
    name: "usd",
    symbol: "$",
  });

  const fetchAllCoin = async () => {
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`;
    const options = {
      method: "GET",
      headers: { "x-cg-demo-api-key": "CG-1P9qPjhPNEZXdmUprAKqWeZq" }, // ✅ yahan apni key
    };

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("API Response:", data); // 👈 check karne ke liye
      setAllCoin(Array.isArray(data) ? data : []); // ✅ slice wali error se bachne ke liye
    } catch (error) {
      console.error("Fetch error:", error);
      setAllCoin([]); // ❌ crash na ho isliye empty array set
    }
  };

  useEffect(() => {
    fetchAllCoin();
  }, [currency]);

  const contextValue = {
    allCoin,
    currency,
    setCurrency,
  };

  return (
    <CoinContext.Provider value={contextValue}>
      {props.children}
    </CoinContext.Provider>
  );
};

export default CoinContextProvider;
