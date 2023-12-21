import axios from 'axios';

const searchImages = async (userWish) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
        Authorization: 'Client-ID JC9jax40jXvMoppukxjDJYlzp2iQ1KQx3ppObgoSfgA'
    },

    params: {
        query: userWish,
    }
});

return response.data.results;
};

export default searchImages