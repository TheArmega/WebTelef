import React from 'react'
import { TableData } from './TableData'
import {useFetchData} from '../hooks/useFetchData'

import 'bootstrap/dist/css/bootstrap.min.css'

export const TableGrid = ({days, routes}) => {

    const {data_1} = useFetchData(routes[0]);
    const {data_2} = useFetchData(routes[1]);
    const {data_3} = useFetchData(routes[2]);
    const {data_4} = useFetchData(routes[3]);

    return (
        <table className="table table-borderless align-middle">
            <thead>

                <tr>
                    <th className="h1 h1-custom">
                        Tiempo Medio Amplicaciones
                    </th>
                    <th className="h1 h1-custom">
                        Tiempo Medio Obra Nueva
                    </th>
                    <th className="h1 h1-custom">
                        Percentil 95 Amplicaciones
                    </th>
                    <th className="h1 h1-custom">
                        Percentil 95 Obra Nueva
                    </th>
                </tr>

                <tr>
                    <th className="h2 h2-custom">
                        Objetivo: <b className="b-custom">{days[0]}</b> días 
                    </th>
                    
                    <th className="h2 h2-custom">
                        Objetivo: <b className="b-custom">{days[1]}</b> días 
                    </th>
                    
                    <th className="h2 h2-custom">
                        Objetivo: <b className="b-custom">{days[2]}</b> días 
                    </th>
                    
                    <th className="h2 h2-custom">
                        Objetivo: <b className="b-custom">{days[3]}</b> días 
                    </th>
                    
                </tr>

                <tr>
                    <th><hr></hr></th>
                    <th><hr></hr></th>
                    <th><hr></hr></th>
                    <th><hr></hr></th>
                </tr>
                
            </thead>

            <tbody>
                <tr>
                    <td>
                        <TableData data={data_1} type="Media Días"/>
                    </td>
                    <td>
                        <TableData data={data_2} type="Media Días"/>
                    </td>
                    <td>
                        <TableData data={data_3} type="Percentil 95"/>
                    </td>
                    <td>
                        <TableData data={data_4} type="Percentil 95"/>
                    </td>
                </tr>
          
            </tbody>

        </table>
    )

}
