import React, { useState, useEffect } from "react";
import HeaderTabs from "./components/HeaderTabs";
import SearchBar from "./components/SearchBar";
import Categories from "./components/Categories";
import BottomTabs from "./components/BottomTabs";
import RestaurantItems, {
	localRestaurants
} from "./components/RestaurantItems";

import { Divider } from "react-native-elements";

import { View, Tabs, ScrollView } from "react-native";
import { SafeArea } from "../../../components";

const Home = ({navigation}) => {
	const [restaurantData, setRestaurantData] = useState(localRestaurants);
	const [city, setCity] = useState("SanFrancisco");
	const [activTab, setActivTab] = useState("Delivery");

	const YELP_API_KEY =
		"apiKeyFromGooglePlatform";

	const getRestaurantFromYelp = () => {
		var queryURL = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3//businesses/search?term=restaurants&location=${city}`;

		const apiOptions = {
			headers: {
				Authorization: `Bearer ${YELP_API_KEY}`
			}
		};
		return fetch(queryURL, apiOptions)
			.then((res) => res.json())
			.then((json) =>
				setRestaurantData(
					json.businesses.transaction.filter(includes(activTab.toLowerCase()))
				)
			)
			.catch((error) => console.log("Authorization failed : " + error.message));
	};

	useEffect(() => {
		console.log("zmiana");
	}, [city, activTab]);

	return (
		<>
			<HeaderTabs activTab={activTab} setActivTab={setActivTab} />
			<SearchBar cityHandler={setCity} />
			<ScrollView showsVerticalScrollIndicator={false}>
				<Categories />
				<RestaurantItems restaurants={restaurantData} 
				navigation={navigation} />
			</ScrollView>
			<Divider width={2} />
			{/* // Why this is always on bottom?? */}
			<BottomTabs />
		</>
	);
};

export default Home;
