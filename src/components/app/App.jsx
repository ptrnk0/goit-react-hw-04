import ImageGallery from "../imageGallery/ImageGallery";
import SearchBar from "../searchBar/SearchBar";
import ErrorMessage from "../errorMessage/ErrorMessage";
import LoadMoreBtn from "../loadMoreBtn/LoadMoreBtn";
import getImages from "../../unsplash-api";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { LineWave } from "react-loader-spinner";
import css from "./App.module.css";
import ImageModal from "../imageModal/ImageModal";

const App = () => {
	const [images, setImages] = useState([]);
	const [loader, setLoader] = useState(false);
	const [error, setError] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [hasMore, setHasMore] = useState(false);
	const [query, setQuery] = useState("");
	const [modalIsOpen, setIsOpen] = useState(false);
	const [modalImage, setModalImage] = useState(null);

	const handleOpenModal = (image) => {
		setIsOpen(true);
		setModalImage(image);
	};

	const handleCloseModal = () => {
		setIsOpen(false);
		setModalImage(null);
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
			<main className={css.main}>
				{error && <ErrorMessage />}
				{images && (
					<ImageGallery
						images={images}
						onOpenModal={handleOpenModal}
					/>
				)}
				{modalImage && (
					<ImageModal
						value={modalIsOpen}
						onCloseModal={handleCloseModal}
						image={modalImage}
					/>
				)}
				{loader && <LineWave />}
				{hasMore && <LoadMoreBtn onClick={handleClickLoadMore} />}
			</main>
		</>
	);
};

export default App;
