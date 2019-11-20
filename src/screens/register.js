import React, { Component } from 'react'
import {View} from 'react-native'
import {Text , Input, Button} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class register extends Component {
    state ={
        look : true
    }

    render() {
        return (
            <View style={{flex:1, paddingHorizontal:20}}>
                <Text h1 style={{marginTop:'50%',alignSelf:'center'}}>Instakeun</Text>
                    <View>
                        <Input
                        placeholder='Username'
                        leftIcon={
                            <Icon
                            name='user'
                            size={20}
                            color = 'black'
                            style={{paddingRight:10}}
                            />
                        }
                        ></Input>
                    </View>

                        <View>
                            <Input
                            placeholder='Email'
                            leftIcon={
                                <Icon
                                name='envelope'
                                size={20}
                                color = 'black'
                                style={{paddingRight:5}}
                                />
                            }
                            ></Input>
                        </View>


                    <View style={{marginTop:10}}>
                        <Input
                        placeholder='Password'
                        secureTextEntry ={this.state.look}
                        leftIcon ={
                            <Icon
                                name = 'lock'
                                size = {20}
                                color = 'black'
                                style={{paddingRight:10}}
                            />
                        }
                        rightIcon ={
                            <Icon
                                name = 'eye'
                                size= {20}
                                color ='black'
                                onPress= {()=>{this.setState({look : !this.state.look})}}
                            />
                        }
                        />
                    </View>
                    <View style={{marginTop:10}}>
                        <Input
                        placeholder='Conrifm Password'
                        secureTextEntry ={this.state.look}
                        leftIcon ={
                            <Icon
                                name = 'lock'
                                size = {20}
                                color = 'black'
                                style={{paddingRight:10}}
                            />
                        }
                        rightIcon ={
                            <Icon
                                name = 'eye'
                                size= {20}
                                color ='black'
                                onPress= {()=>{this.setState({look : !this.state.look})}}
                            />
                        }
                        />
                    </View>

                    <View style={{marginTop:30}}>
                        <Button
                            title = 'Sign Up'
                            type ='solid'
                        />
                    </View>

                    <View style={{flexDirection:'row', marginTop:10}}>
                        <View style={{flex:1}}>
                            <Button title='Login' 
                                type='solid' 
                                icon={
                                    <Icon
                                        name='google'
                                        size={20}
                                        color='white'
                                        style={{paddingHorizontal:10}}
                                    />
                                }
                                buttonStyle={{backgroundColor:'red', marginRight:5}}
                            />
                                
                                    
                        </View>
                        <View style={{flex:1}}>
                            <Button title='Login' 
                            type='solid' 
                            icon={
                                <Icon
                                    name='facebook'
                                    size = {20}
                                    color = 'white'
                                    style ={{paddingHorizontal:10}}
                                />
                            }
                            
                            buttonStyle={{backgroundColor:'blue',marginLeft:5}}
                            
                            />

                            
                        </View>
                    </View>

                    <View style={{alignSelf:'center',marginTop:20}}>
                        <View style={{flexDirection:'row', justifyContent:'center',marginTop:15}}>
                            <Text h5>Have an Account? Please </Text>
                            <Text style={{fontWeight:'bold'}}>Login</Text>

                        </View>
                    </View>

            </View>
        )
    }
}
