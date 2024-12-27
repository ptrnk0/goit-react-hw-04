import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;
const apiUrl = import.meta.env.VITE_API_URL;

axios.defaults.url = apiUrl;

const getImages = (userInput) => {
	const response = axios.get(`/search/photos/`, {
		headers: {
			Authorization: `Client-ID ${apiKey}`,
		},
		param: {
			query: userInput,
		},
	});
	console.log(response);

	return response.data;
};

export default getImages;
