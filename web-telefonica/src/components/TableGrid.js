import React from 'react'
import { TableData } from './TableData'
import {useFetchData} from '../hooks/useFetchData'
import { NavLink } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

export const TableGrid = () => {

    const days = [1, 2, 3, 4];

    const {data_1} = useFetchData(0);
    const {data_2} = useFetchData(1);
    const {data_3} = useFetchData(2);
    const {data_4} = useFetchData(3);

    return (
        <table className="table table-borderless align-middle">
            <thead>

                <tr>
                    <th className="h1">
                        <NavLink 
                            activeClassName="active"
                            className="h1-custom"
                            exact
                            to={{
                                pathname:'/graphics',
                                aboutProps: {
                                    data: data_1
                                }
                            }}
                        > Tiempo Medio Amplicaciones
                        </NavLink>
                    </th>

                    <th className="h1">
                        <NavLink 
                            activeClassName="active"
                            className="h1-custom" 
                            exact
                            to={{
                                pathname:'/graphics',
                                aboutProps: {
                                    data: data_2
                                }
                            }}
                        > Tiempo Medio Obra Nueva
                        </NavLink>
                    </th>

                    <th className="h1">
                        <NavLink 
                            activeClassName="active"
                            className="h1-custom" 
                            exact
                            to={{
                                pathname:'/graphics',
                                aboutProps: {
                                    data: data_3
                                }
                            }}
                        > Percentil 95 Amplicaciones
                        </NavLink>
                    </th>

                    <th className="h1">
                        <NavLink 
                            activeClassName="active"
                            className="h1-custom"  
                            exact
                            to={{
                                pathname:'/graphics',
                                aboutProps: {
                                    data: data_4
                                }
                            }}
                        > Percentil 95 Obra Nueva
                        </NavLink>
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
