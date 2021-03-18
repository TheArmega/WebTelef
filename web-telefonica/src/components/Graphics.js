import React from 'react'
import { Line } from "react-chartjs-2"
import { Banner } from './Banner';


export const Graphics = (_data) => {
  
  try{
  const datos = _data.location.aboutProps;

  const label = datos.data.title;

  const months = [];
  const values = [];

  datos.data.data.map(row =>(

    months.push(row.month),
    values.push(row.value)

  ))

  const data = {
    labels: months,
    datasets: [
      {
        label: label,
        fontColor: "black",
        data: values,
        fill: false,
        borderColor: "rgba(255, 159, 64, 1)",
        pointColor: 'rgba(220,220,220,1)',
        borderWidth: 5,
      },
    ],
  }
  
  const options = {
    options: {
      legend: {
        labels: {
            fontColor: "blue",
            fontSize: 45
        }
    },
      layout: {
          padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
          }
      }
  },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: 'black',
            fontSize: 20,
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: 'black',
            fontSize: 22
          },
        },
      ],
    },
    
  }


    return (
      <>
        <Line data={data} options={options} />
      </>
    )

  }
  catch(error) {
    return (
      <Banner />
    )
    
  }
}
