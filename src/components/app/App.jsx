import ImageGallery from "../imageGallery/ImageGallery";
import SearchBar from "../searchBar/SearchBar";
import ErrorMessage from "../errorMessage/ErrorMessage";
import getImages from "../../unsplash-api";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import { LineWave } from "react-loader-spinner";
import LoadMoreBtn from "../loadMoreBtn/LoadMoreBtn";

const App = () => {
	const [images, setImages] = useState([]);
	const [loader, setLoader] = useState(false);
	const [error, setError] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [hasMore, setHasMore] = useState(false);
	const [query, setQuery] = useState("");

	const handleSearch = async (userQuery) => {
		try {
			setImages([]);
			setError(false);
			setLoader(true);
			setQuery(userQuery);
			const data = await getImages(userQuery);
			setHasMore(data.total_pages > currentPage);
			setImages(data.results);
		} catch (error) {
			setError(true);
		} finally {
			setLoader(false);
		}
	};

	const handleClickLoadMore = async () => {
		try {
			setCurrentPage((prev) => prev + 1);
			setLoader(true);
			const data = await getImages(query, currentPage + 1);
			setHasMore(data.total_pages > currentPage + 1);
			setImages((prev) => [...prev, ...data.results]);
		} catch (error) {
			setError(true);
		} finally {
			setLoader(false);
		}
	};

	return (
		<>
			<Toaster />
			<header>
				<SearchBar onSearch={handleSearch} />
			</header>
			<main>
				{error && <ErrorMessage />}
				{images && <ImageGallery images={images} />}
				{loader && <LineWave />}
				{hasMore && <LoadMoreBtn onClick={handleClickLoadMore} />}
			</main>
		</>
	);
};

export default App;
