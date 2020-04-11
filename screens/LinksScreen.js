import * as React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

class LinksScreen extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			TextInputLabel : '',
			TextInputMontant : ''
		}
	}

	InsertDataToServer = () => {
		const { TextInputLabel, TextInputMontant } = this.state

		fetch('http://localhost:3000/post-type', {
			method: 'POST',
			mode : 'no-cors',
			body : "label="+ TextInputLabel + "&montant=" +TextInputMontant,
			headers : {
				'Accept' : 'application/json',
				'Content-Type' : 'application/x-www-form-urlencoded',
			}
		})
			.then((response) => response.json())
			.catch((error) => {
				console.error(error)
			});
	};

	render() {
		return (
			<View style={ styles.container }>
				<ScrollView style={ styles.container } contentContainerStyle={ styles.contentContainer }>
					<View style={ styles.welcomeContainer }>
						<Text>Insert into bdd</Text>

						<TextInput
							placeholder="Label"

							onChangeText={ TextInputLabel => this.setState({ TextInputLabel }) }

							// Making the Under line Transparent.
							underlineColorAndroid='transparent'

							style={ styles.TextInputStyleClass }
						/>

						<TextInput
							placeholder="Montant"

							onChangeText={ TextInputMontant => this.setState({ TextInputMontant }) }

							// Making the Under line Transparent.
							underlineColorAndroid='transparent'

							style={ styles.TextInputStyleClass }
						/>


						<Button title="Envoyer les données sur la bdd" onPress={ this.InsertDataToServer }
								color="#2196F3"/>

					</View>
				</ScrollView>
			</View>
		);
	}


}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fafafa',
	},
	contentContainer: {
		paddingTop: 15,
	},
	optionIconContainer: {
		marginRight: 12,
	},
	option: {
		backgroundColor: '#fdfdfd',
		paddingHorizontal: 15,
		paddingVertical: 15,
		borderWidth: StyleSheet.hairlineWidth,
		borderBottomWidth: 0,
		borderColor: '#ededed',
	},
	lastOption: {
		borderBottomWidth: StyleSheet.hairlineWidth,
	},
	optionText: {
		fontSize: 15,
		alignSelf: 'flex-start',
		marginTop: 1,
	},
});

export default LinksScreen