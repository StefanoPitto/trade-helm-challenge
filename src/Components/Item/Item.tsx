import React from "react";
import { ItemContainer, RemoveButton } from "./ItemStyle";

interface Props {
	value: string;
	remove: (index: number) => void;
	id: number;
}
export const Item = ({ value, remove, id }: Props) => (
	<ItemContainer>
		<span>{value}</span>
		<RemoveButton
			onClick={() => {
				remove(id);
			}}
		>
			X
		</RemoveButton>
	</ItemContainer>
);
