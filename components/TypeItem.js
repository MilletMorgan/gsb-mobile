import React from 'react'
import { View, Text } from 'react-native'

export class TypeItem extends React.Component {
	render() {
		const type = this.props.type;
		return (
			<View>
				<Text>{type.id}</Text>
				<Text>{type.label}</Text>
				<Text>{type.montant}</Text>
			</View>
		)
	}
}