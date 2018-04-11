import React,{Component} from 'react';
import { AppRegistry , View } from 'react-native';
import Todo from './src/components/Todo';

export default class App extends Component{
render(){
  return(
    <View>
<Todo/>
    </View>
  )
}
}


AppRegistry.registerComponent('Todo', () => App);

