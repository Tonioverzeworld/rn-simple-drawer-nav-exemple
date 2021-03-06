import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Button, TouchableOpacity,
    SafeAreaView
} from 'react-native'
import IOSIcon from "react-native-vector-icons/Ionicons"

class MainScreen extends Component {

    static navigationOptions =  ({navigation}) => ({
        title: "Main",
        headerLeft:(
            <TouchableOpacity style={styles.menu_btn}
                // onPress={() => navigation.navigate("DrawerOpen")}
                              onPress={() => this.props.navigation.navigate('SideMenu')}
            >
                <IOSIcon name="ios-menu" size={30} />
            </TouchableOpacity>),
        headerStyle: { paddingRight: 10, paddingLeft: 30 }
    })
    render () {
        return (
            <SafeAreaView style={styles.container}>
                <Text>Main</Text>
                <Button onPress={() => this.props.navigation.navigate("Detail")} title="Detail Page" />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    menu_btn: {
        marginLeft: 20,
    }
});

export default MainScreen;