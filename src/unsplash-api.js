import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;
const apiUrl = import.meta.env.VITE_API_URL;

axios.defaults.baseURL = apiUrl;
axios.defaults.headers.common["Authorization"] = `Client-ID ${apiKey}`;
axios.defaults.headers.common["Accept-Version"] = "v1";

const getImages = async (userInput) => {
	const response = await axios.get(`/search/photos`, {
		params: {
			query: userInput,
		},
	});
	console.log(response.data);

	return response.data;
};

export default getImages;
