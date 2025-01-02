import css from "./ImageGallery.module.css";
import ImageCard from "../imageCard/ImageCard";

const ImageGallery = ({ images, onOpenModal }) => {
	return (
		<ul className={css.galleryContainer}>
			{images.map((image) => {
				return (
					<li key={image.id}>
						<ImageCard image={image} onOpenModal={onOpenModal} />
					</li>
				);
			})}
		</ul>
	);
};

export default ImageGallery;
