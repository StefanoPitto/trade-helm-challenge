import React, { useEffect, useState } from "react";
import { useItems } from "../../Hooks/useItems";
import { Item } from "../Item/Item";
import {
	Button,
	HomeContainer,
	InnerContainer,
	ListContainer,
	AddSection,
} from "./HomeStyle";

export const Home = () => {
	const [value, setValue] = useState<string>("");
	const { isLoading, addItem, items, removeItem } = useItems();
	const handleValue = (e: { target: { value: string } }) => {
		setValue(e.target.value);
	};

	return (
		<HomeContainer>
			<img src="https://i.imgur.com/yCTwty5.png" alt="trade-helm" />

			<InnerContainer>
				<h1>Supermarket list</h1>
				<h3>Item(s): {items.length}</h3>
				{isLoading ? (
					<p>Loading...</p>
				) : (
					<ListContainer>
						{items &&
							items.map((item, i) => (
								<Item key={i} value={item} id={i} remove={removeItem} />
							))}
					</ListContainer>
				)}
				<AddSection>
					<input
						value={value}
						onChange={handleValue}
						placeholder="Add to list..."
					/>
					<Button
						onClick={() => {
							addItem(value);
							setValue("");
						}}
					>
						Add Item
					</Button>
				</AddSection>
			</InnerContainer>
		</HomeContainer>
	);
};
