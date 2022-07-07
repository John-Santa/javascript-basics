const endpoint = 'https://reqres.in/api/users';

const getUser = async ( uderId ) => {
    const response = await fetch( `${endpoint}/${uderId}` );
    const { data } = await response.json();
    return data;
}

const createUser = async ( user ) => {
    const response = await fetch( endpoint, {
        method: 'POST',
        body: JSON.stringify( user ),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    
    return await response.json();
}

export {
    getUser,
    createUser,
}