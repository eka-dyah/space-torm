import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const Modals = ({ children, isOpen, header, toggleModal }) => {
	return (
		<Modal toggle={toggleModal} isOpen={isOpen}>
			<ModalHeader>{header}</ModalHeader>
			<ModalBody>
				{children}
			</ModalBody>
			<ModalFooter>
				<button onClick={toggleModal} className="btn btn-danger">
					Close
				</button>
			</ModalFooter>
		</Modal>
	);
};

export default Modals;
