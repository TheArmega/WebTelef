import React from 'react';

export const TableData = ({data, type}) => {
    return (
        <table className="table table-striped table-custom" >
            <thead>
                <tr>
                    <th scope="col" className="h3">Mes</th>
                    <th scope="col" className="h3">{type}</th>
                </tr>
            </thead>
            
            <tbody>
                <tr>
                    <th><a className="a-custom" href="!#">Hola</a></th>
                    <th>Adiós</th>
                </tr>
                {/* {
                    data.map(row =>(
                        <tr>
                            <th><a className="a-custom" href="!#">Hola</a></th>
                            <th>Adiós</th>
                        </tr>
                    ))                    
                } */}
            </tbody>
        </table>
    )
}
