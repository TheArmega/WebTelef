export const getData = async(route) => {

    const urls = [
        '',
        '',
        '',
        ''
    ];

    const url = urls[route];
    const resp = await fetch(url);
    const { data } = await resp.json();

    const datos = data.map( row => {
        return {
            excel: row.excel,
            half: row.media
        }
    })
    return datos;
}