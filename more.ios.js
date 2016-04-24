'use strict';

import React, {
	StyleSheet,
	View,
	Text,
	Component
} from 'react-native';

class More extends Component{
	render(){
		return(
			<View style={styles.container}>
				<Text style={styles.description}>
					这是更多视图！
				</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	description: {
		fontSize: 20,
		textAlign: 'center',
		color: '#ffffff'
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#123456'
	}
})

module.exports = More;