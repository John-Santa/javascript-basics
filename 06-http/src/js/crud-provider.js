const endpoint = 'https://reqres.in/api/users';

const getUser = async ( uderId ) => {
    const response = await fetch( `${endpoint}/${uderId}` );
    const { data } = await response.json();
    return data;
}

export {
    getUser
}