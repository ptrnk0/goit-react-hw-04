import ImageCard from "../imageCard/ImageCard";

const ImageGallery = ({ images }) => {
	return (
		<ul>
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
