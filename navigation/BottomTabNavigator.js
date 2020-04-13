import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import GetTypesScreen from '../screens/GetTypesScreen';
import PostTypesScreen from '../screens/PostTypesScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
	// Set the header title on the parent stack navigator depending on the
	// currently active tab. Learn more in the documentation:
	// https://reactnavigation.org/docs/en/screen-options-resolution.html
	navigation.setOptions({ headerTitle: getHeaderTitle(route) });

	return (
		<BottomTab.Navigator initialRouteName={ INITIAL_ROUTE_NAME }>
			<BottomTab.Screen
				name="GetData"
				component={ GetTypesScreen }
				options={ {
					title: 'Affiché les données',
					tabBarIcon: ({ focused }) => <TabBarIcon focused={ focused } name="md-code-working"/>,
				} }
			/>
			<BottomTab.Screen
				name="PostData"
				component={ PostTypesScreen }
				options={ {
					title: 'Envoyé des données',
					tabBarIcon: ({ focused }) => <TabBarIcon focused={ focused } name="md-book"/>,
				} }
			/>
		</BottomTab.Navigator>
	);
}

function getHeaderTitle(route) {
	const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

	switch (routeName) {
		case 'GetData':
			return 'Affiché les données';
		case 'PostData':
			return 'Envoyé des données';
	}
}
