import "./Button.css";
import React from "react";

export type BtnType = {
	children: React.ReactNode;
	isLoading?: boolean;
	type: "primary" | "outlined";
	disabled: boolean;
	onClick: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
};

export const Button: React.FC<BtnType> = ({
	isLoading,
	children,
	type,
	disabled,
	onClick,
}) => {
	return (
		<button disabled={disabled} className={`${type}`} onClick={onClick}>
			{isLoading ? "Loading..." : children}
		</button>
	);
};
