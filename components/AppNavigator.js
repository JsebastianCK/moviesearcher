import Home from './Home';
import Welcome from './Welcome';
import {createStackNavigator, createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator({
  Welcome: {screen: Welcome},
  Home: {screen: Home},
});

const App = createAppContainer(MainNavigator);

export default App;