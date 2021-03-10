import React from 'react'
import { Banner } from './components/Banner'
import { TableGrid } from './components/TableGrid'

export const WebTelefonica = () => {

  const routes = [
    'a',
    'b',
    'c',
    'd'
  ];
  const days = [1, 2, 3, 4];

  return (
    <>
      <Banner />      
      <TableGrid days={days} routes={routes}/>

    </>
  )
}
