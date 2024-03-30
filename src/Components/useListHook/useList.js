import { useState } from "react";
export function useList() {
	// Создаем стейт для и массив list
	const [list, setList] = useState([]);
	/** Создать новый элемент. */
	const createItem = () => {
		setList((prev) => [...prev, { id: new Date(), title: "", done: false }]);
	};

	
	/**
	 * Установить заголовок элемента.
	 *
	 * @param id - ID элемента.
	 * @param title - Заголовок элемента.
	 */
	const setItemTitle = (id, title) => {
		setList((prev) =>
			prev.map((item) => (item.id === id ? { ...item, title: title } : item)),
		);
	};

	/**
	 * Переключить выполненность элемента.
	 *
	 * @param id - ID элемента.
	 */
	const toggleItem = (id) => {
		setList((prev) =>
			prev.map((item) =>
				item.id === id ? { ...item, done: !item.done } : item,
			),
		);
	};

	/**
	 * Удалить элемент.
	 *
	 * @param id - ID элемента.
	 */
	const deleteItem = (id) => {
		setList((prev) => prev.filter((item) => item.id != id));
	};

	return {
		list,
		createItem,
		setItemTitle,
		toggleItem,
		deleteItem,
	};
}
