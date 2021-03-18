export const getData = async() => {

    // const urls = [
    //     '',
    //     '',
    //     '',
    //     ''
    // ];

    // const url = urls[route];
    // const resp = await fetch(url);
    // const { data } = await resp.json();

    // const datos = data.map( row => {
    //     return {
    //         excel: row.excel,
    //         half: row.media
    //     }
    // })

    const datos =  [ 
        {
            title: "Tiempo Medio Amplicaciones",
            objetivo: 25,
            col_1: "Mes",
            col_2: "Media Días",
            data: [
                {
                    month: "2021/01",
                    value: 24.54
                },
                {
                    month: "2021/02",
                    value: 34.54
                },
                {
                    month: "2021/03",
                    value: 54.54
                }
            ]
        },
        {
            title: "Tiempo Medio Obra Nueva",
            objetivo: 25,
            col_1: "Mes",
            col_2: "Media Días",
            data: [
                {
                    month: "2021/01",
                    value: 54.54
                },
                {
                    month: "2021/01",
                    value: 54.54
                },{
                    month: "2021/01",
                    value: 54.54
                }
            ]
        },
        {
            title: "Percentil 95 Amplicaciones",
            objetivo: 25,
            col_1: "Mes",
            col_2: "Percentil 95",
            data: [
                {
                    month: "2021/01",
                    value: 54.54
                },
                {
                    month: "2021/01",
                    value: 54.54
                },
                {
                    month: "2021/01",
                    value: 54.54
                }
            ]
        },
        {
            title: "Percentil 95 de Obra Nueva",
            objetivo: 25,
            col_1: "Mes",
            col_2: "Percentil 95",
            data: [
                {
                    month: "2021/01",
                    value: 54.54,
                },
                {
                    month: "2021/01",
                    value: 54.54
                },
                {
                    month: "2021/01",
                    value: 54.54
                }
            ]
        },
        
        
    ]

    return datos;
}