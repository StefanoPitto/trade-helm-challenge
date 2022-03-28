import { useEffect, useState } from "react";

export const useItems = () => {
	const [items, setItems] = useState<string[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const addItem = (value: string) => {
		if (value.length === 0) return;
		let newArray: string[] = [...items, value];
		localStorage.setItem("items", JSON.stringify(newArray));
		setItems(newArray);
	};

	const getItems = async () => {
		let storage: any = await localStorage.getItem("items");
		if (!storage) return;
		let newArray: string[] = JSON.parse(storage);
		setItems(newArray);
	};

	const removeItem = (index: number) => {
		let newArray: string[] = items.filter((_, i) => i !== index);
		localStorage.setItem("items", JSON.stringify(newArray));
		setItems(newArray);
	};

	useEffect(() => {
		setTimeout(() => {
			getItems();
			setIsLoading(false);
		}, 1500);
	}, []);

	return {
		addItem,
		isLoading,
		items,
		removeItem,
	};
};
