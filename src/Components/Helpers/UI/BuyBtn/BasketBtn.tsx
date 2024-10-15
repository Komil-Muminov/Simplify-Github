import * as React from "react";
import "./BasketBtn.css";
import { RequestLoading } from "../Loading/RequsetLoading";
interface TProps {
	type: string;
	isLoading?: boolean;
	disabled?: boolean;
	children?: React.ReactNode;
}
export const BasketBtn: React.FC<TProps> = ({
	type,
	isLoading,
	disabled,
	children,
}) => {
	return (
		<>
			<button className={`btn ${type}`} disabled={disabled}>
				{isLoading ? <RequestLoading /> : children}
			</button>
		</>
	);
};
