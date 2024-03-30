import { useEffect, useRef } from "react";

export function useAutoFocus() {
	const ref = useRef();
	useEffect(() => {
		if (ref.current) {
			ref.current.focus();
		}
	}, [ref]);

	return { ref };
}
