import React from "react";
import styled from "styled-components/native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

import { View } from "react-native";

import { Flex, Text } from "../../../../components";

const SearchBar = ({ cityHandler }) => {
	let googleApi = "apiKeyFromGooglePlatform-0";
	return (
		<Flex>
			<GooglePlacesAutocomplete
				placeholder="Search"
				query={{ key: "googleApi" }}
				onPress={(data, details = null) => {
					console.log(data.description);
					const city = data.description.split(",")[0];
					cityHandler(city);
				}}
				styles={{
					textInput: {
						backgroundColor: "#eee",
						borderRadius: 20,
						fontWeight: "700",
						marginTop: 7
					},
					textInputContainer: {
						backgroundColor: "#eee",
						borderRadius: 50,
						flexDirection: "row",
						alignItems: "center",
						marginHorizontal: 15,
						marginBottom: 10
					}
				}}
				renderLeftButton={() => (
					<View style={{}}>
						<Ionicons name="location-sharp" size={24} />
					</View>
				)}
				renderRightButton={() => (
					<View
						style={{
							flexDirection: "row",
							marginRight: 8,
							backgroundColor: "white",
							padding: 9,
							borderRadius: 30,
							alignItems: "center"
						}}
					>
						<AntDesign
							name="clockcircle"
							size={11}
							style={{ marginRight: 6 }}
						/>
						<Text>Search</Text>
					</View>
				)}
			/>
		</Flex>
	);
};

export default SearchBar;
