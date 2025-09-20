import React, { useState, useEffect } from 'react'
import Chart from "react-google-charts"

function LineChart({ historicalData }) {
  const [data, setData] = useState([['Date', 'Prices']])

  useEffect(() => {
    if (historicalData && historicalData.prices) {
      const dataCopy = [['Date', 'Prices']]
      historicalData.prices.forEach((item) => {
        dataCopy.push([
          new Date(item[0]).toLocaleDateString(), // x-axis: date
          item[1] // y-axis: price
        ])
      })
      setData(dataCopy)
    }
  }, [historicalData])

  return (
    <Chart
      chartType="LineChart"
      data={data}
      height="400px"
      legendToggle
    //   options={{
    //     title: "Price History (30 Days)",
    //     legend: { position: "bottom" },
    //     backgroundColor: "transparent",
    //     hAxis: { title: "Date" },
    //     vAxis: { title: `Price` },
    //   }}
    />
  )
}

export default LineChart
