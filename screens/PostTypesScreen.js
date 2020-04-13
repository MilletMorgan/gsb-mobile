import * as React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Platform, Alert } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';

import { postTypesToBdd } from "../BDD/Models";

class PostTypesScreen extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			TextInputLabel: '',
			TextInputMontant: ''
		}
	}

	InsertDataToServer = () => {
		const { TextInputLabel, TextInputMontant } = this.state;

		postTypesToBdd(TextInputLabel, TextInputMontant).then(r => console.log(r));
	};

	render() {
		return (
			<View style={ [styles.container] } keyboardShouldPersistTaps='always'>
				<View style={ [styles.card] }>
					<View style={ [styles.center] }>
						<Text style={ styles.title }>Créer un nouveau type de frais forfait</Text>
					</View>

					<TextInput
						placeholder="Label"
						onChangeText={ TextInputLabel => this.setState({ TextInputLabel }) }
						underlineColorAndroid='transparent'
						style={ styles.TextInputStyleClass }
					/>

					<TextInput
						placeholder="Montant"
						onChangeText={ TextInputMontant => this.setState({ TextInputMontant }) }
						underlineColorAndroid='transparent'
						style={ styles.TextInputStyleClass }
					/>


					<Button title="Envoyer les données sur la bdd"
							onPress={ this.InsertDataToServer }
							style={ styles.btn }
					/>
				</View>
			</View>
		);
	}


}

const styles = StyleSheet.create({
	title: {
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 20
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
	},
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
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
	TextInputStyleClass: {
		textAlign: 'center',
		height: 70,
		width: "auto",
		marginBottom: 10,
		borderRadius: 4,
		borderColor: "rgba(238,238,238,1)",
		borderWidth: 1

	},
});

export default PostTypesScreen