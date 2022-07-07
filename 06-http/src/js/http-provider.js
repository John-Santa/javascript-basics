const jokeUrl = 'https://api.chucknorris.io/jokes/random';
const usersUrl = 'https://reqres.in/api/users?page=2';

const obtainJoke = async () => {
    try {
        const response = await fetch(jokeUrl)
    if (!response.ok) throw 'The request could not be resolved';

        const { icon_url, id, value } = await response.json();

        return  {
            icon_url,
            id,
            value
        }

    } catch (error) {
        throw error;
    }
}

const obtainUsers = async () => {

    try {

        const response = await fetch(usersUrl)
        const { data: users } = await response.json();

        return users;
    } catch (error) {
        throw error;
    }

};


export {
    obtainJoke,
    obtainUsers
}