import ImageModal from "../imageModal/ImageModal";
import { useState } from "react";
import css from "./ImageCard.module.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ImageCard = ({ urls, description }) => {
	const [modalIsOpen, setIsOpen] = useState(false);

	const handleOpenModal = () => {
		setIsOpen(true);
	};

	const handleCloseModal = () => {
		setIsOpen(false);
	};

	return (
		<>
			<div onClick={handleOpenModal}>
				<img src={urls.small} alt={description} />
			</div>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={handleCloseModal}
				contentLabel="Modal window for image"
				className={css.modalContent}
				overlayClassName={css.modalOverlay}
			>
				<ImageModal
					urls={urls.regular}
					description={description}
					onClose={handleCloseModal}
				></ImageModal>
			</Modal>
		</>
	);
};

export default ImageCard;
