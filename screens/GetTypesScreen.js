import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Button, Platform, StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';

import { getTypesFromBdd } from "../BDD/Models";
import { TypeItem } from "../components/TypeItem";

import ContentLoader from "react-native-easy-content-loader";

class GetTypesScreen extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			types: []
		}
	}

	componentDidMount() {
		this._loadTypes();
	}

	_loadTypes() {
		this.setState({ isLoading: true });

		getTypesFromBdd().then(data => {
			this.setState({ types: data })
		})
	}

	render() {
		return (
			<View style={ styles.container }>
				<View style={ [styles.card, styles.light] }>
					<View style={ [styles.center] }>
						<Text style={ [styles.title] }>Listes des types de frais forfait</Text>
					</View>

					<Button
						title='Recharger les données'
						onPress={ () => this._loadTypes() }
						style={ styles.btn }
						containerViewStyle={ { width: '100%', marginLeft: 0 } }
					/>
				</View>

				<SafeAreaView style={ { flex: 1 } }>
					<View style={ [styles.headerTable, styles.card] }>
						<Text style={ styles.headerText }>ID</Text>
						<Text style={ styles.headerText }>LABEL</Text>
						<Text style={ styles.headerText }>MONTANT</Text>
					</View>

					<FlatList
						data={ this.state.types }
						keyExtractor={ (item) => item.id.toString() }
						renderItem={ ({ item }) => <TypeItem type={ item }/> }
					/>
				</SafeAreaView>
			</View>
		);
	}

}

GetTypesScreen.navigationOptions = {
	header: null,
};

function DevelopmentModeNotice() {
	if (__DEV__) {
		const learnMoreButton = (
			<Text onPress={ handleLearnMorePress } style={ styles.helpLinkText }>
				Learn more
			</Text>
		);

		return (
			<Text style={ styles.developmentModeText }>
				Development mode is enabled: your app will be slower but you can use useful development
				tools. { learnMoreButton }
			</Text>
		);
	} else {
		return (
			<Text style={ styles.developmentModeText }>
				You are not in development mode: your app will run at full speed.
			</Text>
		);
	}
}

function handleLearnMorePress() {
	WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode/');
}

function handleHelpPress() {
	WebBrowser.openBrowserAsync(
		'https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change'
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	headerTable: {
		flexDirection: 'row',
		backgroundColor: '#0F111A',
		fontWeight: "bold",
		margin: 10,
		padding: 10,
		elevation: 12,
		borderRadius: 4,
	},
	card: {
		margin: 10,
		padding: 10,
		borderRadius: 4,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.20,
		shadowRadius: 1.41,

		elevation: 2,
	},
	light: {
		backgroundColor: '#FFF',
		color: '#0F111A'
	},
	headerText: {
		flex: 1,
		color: '#FFF',
		textAlign: 'center'
	},

	btn: {
		marginTop: 10,
		marginBottom: 10,
		color: "#82aaff",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.20,
		shadowRadius: 1.41,

		elevation: 2,
		alignSelf: 'stretch',
		textAlign: 'center',
	},

	center: {
		alignItems: 'center',
	},

	title: {
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 20
	},
});

export default GetTypesScreen