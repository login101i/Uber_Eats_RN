import React from "react";
import styled from "styled-components/native";
import { View, Image } from "react-native";
import { Text, Flex } from "../../../../components";

const Container = styled.View`
	padding-bottom: 10px;
	background: white;
`;
const CustomImage = styled.Image`
	width: 100%;
	height: 220px;
	object-fit: cover;
`;

const yelpRestaurantInfo = [
	{
		name: "Nazwa",
		resImage:
			"https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-e1574792735811.jpg",
		price: "4zł",
		reviews: "33",
		rating: 5,
		categories: [{ title: "thai" }, { title: " Polish Food" }]
	}
];
const { name, resImage, price, reviews, rating, categories } =
	yelpRestaurantInfo[0];

const formattedCategories = categories.map((cat) => cat.title).join(" • ");

const description = `${formattedCategories} ${price}  Eat what you want`;

export default function About({ route }) {
	const { name, resImage, price, reviews, rating, categories } = route.params;
	return (
		<Container>
			<Flex column>
				<RestaurantImage image={resImage} />
				<RestaurantName name={name} />
				<RestaurantDescription description={description} />
			</Flex>
		</Container>
	);
}

const RestaurantDescription = ({ description }) => <Text>{description}</Text>;

const RestaurantImage = ({ image }) => (
	<CustomImage
		source={{
			uri: image
		}}
	/>
);

const RestaurantName = ({ name }) => (
	<Text bold size={30}>
		{name}
	</Text>
);
