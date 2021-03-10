import { useState, useEffect } from 'react'
import {getData} from '../helpers/getData'

export const useFetchData = (route) => {

    const [state, setState] = useState({
        data: []
    });

    useEffect(() => {
    
        getData(route)
            .then(datos => {
                setTimeout(() => {
                    setState({
                        data: datos,
                    })
                },);
            })
    })


    return state;

}