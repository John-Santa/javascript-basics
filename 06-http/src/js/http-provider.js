const jokeUrl = 'https://api.chucknorris.io/jokes/random';
const usersUrl = 'https://reqres.in/api/users?page=2';
const cloudPreset = 'gitnde2s';
const cloudUrl = 'https://api.cloudinary.com/v1_1/jhonsanta//upload';

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

const uploadImage = async ( file ) => {
    const formData = new FormData();
    formData.append('upload_preset', cloudPreset);
    formData.append('file', file);

    try {
        const response = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            const cloudResponse = await response.json();
            return cloudResponse.secure_url;
        } else {
            throw await response.json();
        }
    } catch (error) {
        throw error;
    }

}


export {
    obtainJoke,
    obtainUsers,
    uploadImage
}