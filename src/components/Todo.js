import React , {Component} from 'react';
import { StyleSheet , View, Text,TextInput,TouchableOpacity } from 'react-native';

export default class Todo extends Component{
    constructor(){
        super();
        this.state = {
            text:'',
            todos:[],
            flag:false

        }
    }
    onAddBtnPress = () => {
        let {text , todos} = this.state;
        text = text.trim();
        if( text !==''){
            todos.push(text);}
        this.setState({todos,text:''})
    }

    onTextChange = text => this.setState({text})

    deleteIt = (index) => {
        let { todos } = this.state;
        todos.splice(index,1);
        this.setState({todos})

    }
    onEditBtnPress = (index) => {
        let { todos } = this.state;
        this.setState({text:todos[index],flag:true,index});
    }
    edit = () =>{
        let { todos,index,text } = this.state;
        if(text.trim()!=='')
        {todos[index] = text;
            todos.splice(index,1,todos[index]);
            this.setState({flag:false,todos,index:null,text:''})}

    }
    renderList = () => {
        let { todos } = this.state;
        if(todos.length){
            return todos.map((todo ,index)=>{
                return <View key={index} style={{flexDirection:'row'}}>
                    <Text >{todo}</Text>
                    <TouchableOpacity
                        onPress = {()=>this.deleteIt(index)}
                        style = {{backgroundColor:'#ff0000',width:80,height:30,paddingLeft:15}}>
                        <Text style={{color:'white'}}>Delete</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress = {()=>this.onEditBtnPress(index)}
                        style = {{backgroundColor:'#00ff00',width:80,height:30,paddingLeft:15}}>
                        <Text style={{color:'white'}}>Edit</Text>
                    </TouchableOpacity>
                </View> })
        }
        else{
            return <View><Text>Empty Array</Text></View>
        }
    }
    render(){
        let { todos,text,flag } = this.state;
        return(
            <View>
                <TextInput
                    value={text}
                    placeholder = 'Add your todo here'
                    onChangeText = {this.onTextChange}/>
                <TouchableOpacity style ={styles.button}
                                  onPress = {flag?this.edit:this.onAddBtnPress}>
                    <Text >{flag?'Edit':'Add'}</Text>
                </TouchableOpacity>
                {this.renderList()}


            </View>

        );
    }
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#fafad2',
        padding: 10
    }
})