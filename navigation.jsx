import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./infrastructure/screens/Home/Home";
import DetailsScreen from "./infrastructure/screens/DetailsScreen/DetailsScreen";
import OrderCompleted from "./infrastructure/screens/OrderCompleted/OrderCompleted";

import { Provider as ReduxProvider } from "react-redux";
import store from "./redux/store";

import { SafeArea } from "./components";

const Stack = createStackNavigator();

const screenOptions = {
	headerShown: false
};

const Navigation = () => {
	return (
		<ReduxProvider store={store}>
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
					<Stack.Screen name="Home" component={Home} />
					<Stack.Screen name="RestaurantDetails" component={DetailsScreen} />
					<Stack.Screen name="OrderCompleted" component={OrderCompleted} />
				</Stack.Navigator>
			</NavigationContainer>
		</ReduxProvider>
	);
};

export default Navigation;
