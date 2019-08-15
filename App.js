import { createStackNavigator, createAppContainer } from 'react-navigation';

import LoginScreen from './src/screens/LoginScreen'
import SetSelectScreen from './src/screens/SetSelectScreen'
import SetDetailsScreen from './src/screens/SetDetailsScreen'
import SetupTutorialScreen from './src/screens/SetupTutorialScreen'
import PracticeScreen from './src/screens/PracticeScreen'
import PracticeScreen2 from './src/screens/PracticeScreen2'
import FinishScreen from './src/screens/FinishScreen'

const AppNavigator = createStackNavigator({
    LoginScreen: { screen: LoginScreen },
    SetSelectScreen: { screen: SetSelectScreen },
    SetDetailsScreen: { screen: SetDetailsScreen },
    SetupTutorialScreen: { screen: SetupTutorialScreen },
    PracticeScreen: { screen: PracticeScreen },
    PracticeScreen2: { screen: PracticeScreen2 },
    FinishScreen: { screen: FinishScreen }
});

const App = createAppContainer(AppNavigator);

export default App;

