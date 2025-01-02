import css from "./ImageGallery.module.css";
import ImageCard from "../imageCard/ImageCard";

const ImageGallery = ({ images }) => {
	return (
		<ul className={css.galleryContainer}>
			{images.map(({ id, urls, description }) => {
				return (
					<li key={id}>
						<ImageCard urls={urls} description={description} />
					</li>
				);
			})}
		</ul>
	);
};

export default ImageGallery;
