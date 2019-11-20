import React, { Component } from 'react'
import LoginPage from './src/screens/login'
import RegisterPage from './src/screens/register'
import HomePage from './src/screens/home'
import MainStack from './src/routers/login_register_home'

export default class App extends Component {
  render() {
    return (
      <MainStack/>
    )
  }
}
