import css from "./ImageModal.module.css";

const ImageModal = ({ urls, description, onClose }) => {
	return (
		<div onClick={onClose} className={css.modalImgContainer}>
			<img src={urls} alt={description} className={css.modalImg} />
		</div>
	);
};

export default ImageModal;
