import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export class TypeItem extends React.Component {
	render() {
		const type = this.props.type;

		return (
			<View style={ [styles.ListItem, styles.card] }>
				<Text style={ styles.ListItemText }>{ type.id }</Text>
				<Text style={ styles.ListItemText }>{ type.label }</Text>
				<Text style={ styles.ListItemText }>{ type.montant }</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	ListItem: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: "rgba(255,255,255,1)",
		margin: 10,
		marginBottom: 5
	},
	card: {
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
	ListItemText: {
		flex: 1,
		padding: 5,
		textAlign: 'center',
	},

});