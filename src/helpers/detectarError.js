
export const detectarError = (error) => {
    let erroresSinArreglo = 'Error no detectado';
    if (error instanceof ReferenceError) {
        erroresSinArreglo = error.message
    } else if ((error.response.data?.msg || false) && typeof error.response.data.msg === 'string') {
        erroresSinArreglo = error.response.data?.msg;
    } else if ((error.response.data?.msg || false) && typeof error.response.data.msg === 'object') {
        erroresSinArreglo = Object.values(error.response.data.msg).map(e => { return e.msg }).join();
    }
    return erroresSinArreglo
}