import { createStackNavigator, createAppContainer } from 'react-navigation';

import LoginScreen from './src/screens/LoginScreen'
import SetSelectScreen from './src/screens/SetSelectScreen'
import SetDetailsScreen from './src/screens/SetDetailsScreen'
import SetupTutorialScreen from './src/screens/SetupTutorialScreen'
import SetupScreen from './src/screens/SetupScreen'
import PracticeScreen from './src/screens/PracticeScreen'
import FinishScreen from './src/screens/FinishScreen'

const AppNavigator = createStackNavigator({
    LoginScreen: { screen: LoginScreen },
    SetSelectScreen: { screen: SetSelectScreen },
    SetDetailsScreen: { screen: SetDetailsScreen },
    SetupTutorialScreen: { screen: SetupTutorialScreen },
    SetupScreen: { screen: SetupScreen },
    PracticeScreen: { screen: PracticeScreen },
    FinishScreen: { screen: FinishScreen }
});

const App = createAppContainer(AppNavigator);

export default App;

