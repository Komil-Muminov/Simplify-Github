// Error.jsx
import "./RequestError.css";

const RequestError = ({ message }) => {
	return (
		<div className="error__container">
			<div className="error__content">
				<span className="error__message">{message}</span>
			</div>
		</div>
	);
};

export default RequestError;
