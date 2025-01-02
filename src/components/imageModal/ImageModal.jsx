import css from "./ImageModal.module.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ImageModal = ({ image, onCloseModal, value }) => {
	return (
		<Modal
			isOpen={value}
			onRequestClose={onCloseModal}
			contentLabel="Modal window for image"
			className={css.modalContent}
			overlayClassName={css.modalOverlay}
		>
			<div onClick={onCloseModal} className={css.modalImgContainer}>
				<img
					src={image.urls.regular}
					alt={image.description}
					className={css.modalImg}
				/>
			</div>
		</Modal>
	);
};

export default ImageModal;
