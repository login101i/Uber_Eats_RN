import React from "react";
import styled from "styled-components/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { Image, TouchableOpacity } from "react-native";

import { Text, Flex } from "../../../../components";

const Container = styled.View`
	padding: 10px;
	background-color: white;
	margin-top: 10px;
`;

const ImageContainer = styled.Image`
	width: 100%;
	height: 150px;
	resize-mode: cover;
	object-fit: cover;
`;

const CustomOpacity = styled.TouchableOpacity`
	position: absolute;
	right: 20px;
	top: 20px;
`;

const RatingContainer = styled.View`
	background-color: #eee;
	width: 28px;
	height: 28px;
	border-radius: 14px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: black;
`;

export const localRestaurants = [
	{
		name: "Beachside Bar",
		image_url:
			"https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
		categories: ["Cafe", "Bar"],
		price: "$$",
		reviews: 1244,
		rating: 4.5
	},
	{
		name: "Benihana",
		image_url:
			"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
		categories: ["Cafe", "Bar"],
		price: "$$",
		reviews: 1244,
		rating: 3.7
	},
	{
		name: "India's Grill",
		image_url:
			"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
		categories: ["Indian", "Bar"],
		price: "$$",
		reviews: 700,
		rating: 4.9
	}
];

const RustaurantImage = ({ image }) => {
	return (
		<>
			<ImageContainer
				source={{
					uri: image
				}}
			></ImageContainer>
			<CustomOpacity>
				<MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
			</CustomOpacity>
		</>
	);
};

const RestaurantInfo = ({
	name = "Thai Restaurant",
	rating = 5,
	price,
	reviews
}) => {
	return (
		<Flex space align background="white" style={{ marginTop: "4px" }}>
			<Flex column>
				<Text bold size={15}>
					{name}
				</Text>
				<Text subTitle="30-45 min"></Text>
			</Flex>
			<RatingContainer>{rating}</RatingContainer>
		</Flex>
	);
};

const RestaurantItems = ({ navigation, restaurants }) => {
	return (
		<>
			{restaurants.map((restaurant, index) => (
				<TouchableOpacity
					key={index}
					onPress={() =>
						navigation.navigate("RestaurantDetails", {
							name: restaurant.name,
							resImage: restaurant.image_url,
							price: restaurant.price,
							reviews: restaurant.reviews,
							rating: restaurant.rating,
							categories: restaurant.categories
						})
					}
				>
					<Container>
						<RustaurantImage image={restaurant.image_url} />
						<RestaurantInfo
							name={restaurant.name}
							categories={restaurant.categories}
							price={restaurant.price}
							reviews={restaurant.reviews}
							rating={restaurant.rating}
						/>
					</Container>
				</TouchableOpacity>
			))}
		</>
	);
};

export default RestaurantItems;
