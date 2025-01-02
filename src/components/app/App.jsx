import ImageGallery from "../imageGallery/ImageGallery";
import SearchBar from "../searchBar/SearchBar";
import ErrorMessage from "../errorMessage/ErrorMessage";
import LoadMoreBtn from "../loadMoreBtn/LoadMoreBtn";
import getImages from "../../unsplash-api";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { LineWave } from "react-loader-spinner";
import css from "./App.module.css";

const App = () => {
	const [images, setImages] = useState([]);
	const [loader, setLoader] = useState(false);
	const [error, setError] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [hasMore, setHasMore] = useState(false);
	const [query, setQuery] = useState("");
	const [modalIsOpen, setIsOpen] = useState(false);

	const handleOpenModal = () => {
		setIsOpen(true);
	};

	const handleCloseModal = () => {
		setIsOpen(false);
	};

	const handleSearch = (userQuery) => {
		if (query === userQuery) return;
		setImages([]);
		setQuery(userQuery);
		setCurrentPage(1);
	};

	const handleClickLoadMore = () => {
		setCurrentPage((prev) => prev + 1);
	};

	useEffect(() => {
		if (!query) return;

		async function fetchImages() {
			try {
				setError(false);
				setLoader(true);
				const data = await getImages(query, currentPage);
				setHasMore(data.total_pages > currentPage);

				setImages((prev) => [...prev, ...data.results]);
			} catch (error) {
				setError(true);
			} finally {
				setLoader(false);
			}
		}

		fetchImages();
	}, [query, currentPage]);

	return (
		<>
			<Toaster position="top-right" reverseOrder={false} />
			<header className={css.header}>
				<SearchBar onSearch={handleSearch} />
			</header>
			<main>
				{error && <ErrorMessage />}
				{images && (
					<ImageGallery
						images={images}
						onCloseModal={handleCloseModal}
						onOpenModal={handleOpenModal}
						value={modalIsOpen}
					/>
				)}
				{loader && <LineWave />}
				{hasMore && <LoadMoreBtn onClick={handleClickLoadMore} />}
			</main>
		</>
	);
};

export default App;
