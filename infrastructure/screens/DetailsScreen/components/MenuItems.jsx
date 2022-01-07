import React from "react";
import styled from "styled-components/native";
import { View, Image } from "react-native";
import { Flex, Text } from "../../../../components";
import { Divider } from "react-native-elements";
import { useSelector } from "react-redux";

import BouncyCheckbox from "react-native-bouncy-checkbox";

import { useDispatch } from "react-redux";
import { addToCart } from "../../../../redux/actions/cartAction";

const Container = styled.View`
	padding-bottom: 10px;
	background: white;
	display: flex;
	flex-direction: column;
`;

const ItemContainer = styled.View`
	height: 100px;
	width: 400px;
	padding: 5px;

	border-radius: 4px;
	display: flex;
	flex-direction: row;
	padding: 2px;
	margin: 5px;
	justify-content: space-between;
	align-items: center;
`;
const CustomImage = styled.Image`
	width: 90px;
	height: 90px;
	object-fit: contain;
	border-radius: 4px;
	margin-right: 100px;
`;

const EmptyContainer = styled.View``;
const MainContainer = styled.View`
	padding: 15px;
`;

export default function MenuItems({ foods, restaurantName, checkBox }) {
	const dispatch = useDispatch();

	const addToCartHandler = (item, restName, checkboxValue) => {
		const payload = { item, restName, checkboxValue };
		dispatch(addToCart(payload));
	};

	const { items } = useSelector((state) => state.cart.selectedItems);

	const foodInCartHandler = (food, items) => {
		const foodInCart = Boolean(items.find((item) => item.title === food.title));
		console.log(foodInCart);
		return foodInCart;
	};

	return (
		<MainContainer>
			{foods.map((food, index) => (
				<EmptyContainer key={index}>
					<ItemContainer>
						{checkBox && (
							<BouncyCheckbox
								iconStyle={{}}
								fillColor="green"
								onPress={(checkboxValue) =>
									addToCartHandler(food, restaurantName, checkboxValue)
								}
								isChecked={foodInCartHandler(food, items)}
							/>
						)}
						<CustomImage source={{ uri: food.image }} />
						<Flex column style={{ padding: "5px" }}>
							<Text bold>{food.title}</Text>
							<Text>{food.description}</Text>
							<Text>{food.price}</Text>
						</Flex>
					</ItemContainer>
					<Divider width={1} />
				</EmptyContainer>
			))}
		</MainContainer>
	);
}
