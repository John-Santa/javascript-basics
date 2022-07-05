const jokeUrl = 'https://api.chucknorris.io/jokes/random';

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


export {
    obtainJoke,
}