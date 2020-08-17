import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home/Home'
import Player from './Player/Player'

import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';

import { connect } from 'react-redux'

const Stack = createStackNavigator();

class RootScreen extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ApplicationProvider {...eva} theme={this.props.isDark ? eva.dark : eva.light}>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="Home">
                        <Stack.Screen
                            name="Home"
                            component={Home}
                            options={{
                                headerShown: false, // change this to `false`
                            }}
                        />
                        <Stack.Screen name="Player" component={Player} />
                    </Stack.Navigator>
                </NavigationContainer>
            </ApplicationProvider>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isDark: state.theme.isDark
    }
}

export default connect(mapStateToProps)(RootScreen)