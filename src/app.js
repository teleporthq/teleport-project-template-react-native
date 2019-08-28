import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';

const MainNavigator = createStackNavigator(
  {
    Home: {screen: HomeScreen},
    About: {screen: AboutScreen},
  },
  {
    initialRouteName: 'Home',
  },
);

const App = createAppContainer(MainNavigator);

export default App;
