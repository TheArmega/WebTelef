import React from 'react'
import { TableData } from './TableData'
import {useFetchData} from '../hooks/useFetchData'
import { NavLink } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

export const TableGrid = ({categories}) => {

    const {data} = useFetchData();

    return (
        <div className="container-fluid">
            <div className="row" >

            {
                data.map(row => (
                    <div className="col-sm h1" key={row.title}>
                        <NavLink   
                            activeClassName="active"
                            className="h1-custom"
                            exact
                            to={{
                                pathname:'/graphics',
                                aboutProps: {
                                    data: row
                                }
                            }}
                        > {row.title}
                        </NavLink>

                        <p className="h2-custom">
                            Objetivo: {row.objetivo} días
                        </p>

                        <hr></hr>

                        <div className="col-sm" key={row.title}>
                            <TableData data={row} categories={categories}/>
                        </div>
                    </div>

                    
                ))
            }
                    
            </div>
                
        </div>
    )

}
