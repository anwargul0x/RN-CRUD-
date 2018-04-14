import { AppRegistry } from 'react-native';
import App from './App';

import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({ // always call EStyleSheet.build() even if you don't use global variables!
    $textColor: '#0275d8'
});
AppRegistry.registerComponent('Todo', () => App);
