import css from "./ImageGallery.module.css";
import ImageCard from "../imageCard/ImageCard";
import ImageModal from "../imageModal/ImageModal";

const ImageGallery = ({ images, onCloseModal, onOpenModal, value }) => {
	return (
		<ul className={css.galleryContainer}>
			{images.map(({ id, urls, description }) => {
				return (
					<li key={id}>
						<ImageCard
							urls={urls}
							description={description}
							onOpenModal={onOpenModal}
						/>
						<ImageModal
							urls={urls}
							description={description}
							onCloseModal={onCloseModal}
							value={value}
						/>
					</li>
				);
			})}
		</ul>
	);
};

export default ImageGallery;
