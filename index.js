//Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';

//Create a component
const App = () => (  
    <View style={{ flex: 1 }}>
        <View />
    </View>
);


//Render it to the device
AppRegistry.registerComponent('playup', () => App);
