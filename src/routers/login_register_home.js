import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import  LoginPage from '../screens/login'
import HomePage from '../screens/home'
import RegisterPage from '../screens/register'

const MainStack = createAppContainer(createStackNavigator(
    {
        login : LoginPage,
        home: HomePage,
        register : RegisterPage
    },
    {
        initialRouteName : 'login'
    }
))

export default MainStack