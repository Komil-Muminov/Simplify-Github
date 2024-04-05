// Success.jsx
import "./RequestSuccess.css";

const RequestSuccess = ({ message }) => {
	return (
		<div className="success__container">
			<div className="success__content">
				<span className="success__message">{message}</span>
			</div>
		</div>
	);
};

export default RequestSuccess;
