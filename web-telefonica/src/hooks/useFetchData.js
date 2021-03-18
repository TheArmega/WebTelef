import { useState, useEffect } from 'react'
import {getData} from '../helpers/getData'

export const useFetchData = () => {

    const [state, setState] = useState({
        data: []
    });

    useEffect(() => {
    
        getData()
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