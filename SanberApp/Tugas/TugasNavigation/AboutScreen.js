import React, { Component } from 'react'
import { View } from 'react-native';

export default class AboutScreen extends Component{
    constructor(props){
        super(props);
        this.state={
            status:'awal'
        }
    }

    updateStatus(status){
        this.setState({status})
    }

    render(){
        console.log(this.state.status);
        return (
          <View style={styles.container}>
            <Text>About Screen</Text>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})