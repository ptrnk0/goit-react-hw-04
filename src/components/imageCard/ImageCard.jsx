const ImageCard = ({ urls, description, onOpenModal }) => {
	return (
		<div onClick={onOpenModal}>
			<img src={urls.small} alt={description} />
		</div>
	);
};

export default ImageCard;
