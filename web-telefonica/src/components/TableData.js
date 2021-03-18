import React from 'react';

export const TableData = ({data, categories}) => {


    function check (cadena1, cadena2) {

        cadena2 = cadena2.slice(5);

        if(cadena1 === cadena2){
            return true;
        }
        else
            return false;
    }

    function nada(cadena) {
        if(cadena === '')
            return true;
        else
            return false;
    }

    return (
        <table className="table table-striped table-borderless" >
            <thead>
                <tr className="tr-custom">
                    <th scope="col" className="th-custom">{data.col_1}</th>
                    <th scope="col" className="th-custom">{data.col_2}</th>
                </tr>
            </thead>
            
            <tbody>



                {
                
                    
                    
                    data.data.map((row, i) =>(
                        <tr key={i}>
                            {  
                                check(categories, row.month) ? (
                                    <td className="td-custom">
                                        <a className="a-custom" href="!#">{row.month}</a>
                                    </td>
                                ): null
                            }
                            {
                                check(categories, row.month) ? (
                                    <td className="td-custom">{row.value}</td> 
                                ): null
                            }

                            {
                                nada(categories) ? (
                                    <td className="td-custom">
                                        <a className="a-custom" href="!#">{row.month}</a>
                                    </td>
                                ) : null
                            }

{
                                nada(categories) ? (
                                    <td className="td-custom">{row.value}</td>
                                ) : null
                            }
                        
                            {/* <td className="td-custom">
                                <a className="a-custom" href="!#">{row.month}</a>
                            </td>
                            <td className="td-custom">{row.value}</td>  */}
                        </tr>
       
                    ))   

                }
            </tbody>
        </table>
    )
}
