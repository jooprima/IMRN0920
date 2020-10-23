import React from 'react';
import { Text, View } from 'react-native';

import SkillData from './SkillData.js';

export default class SkillScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selectedCategory:0
        }
    }

    render(){
        let skillList = SkillData
        console.log(this.props.route);
        return (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text>SkillScreen</Text>
          </View>
        );
    }
}

