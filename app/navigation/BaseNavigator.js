import React from "react";
import HistoryScreen from "../screens/HistoryScreen";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from "react-navigation";

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    defaultNavigationOptions: {
      title: "home",
    },
  }
);

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  {
    defaultNavigationOptions: {
      title: "settings",
    },
  }
);

const HistoryStack = createStackNavigator(
  {
    History: HistoryScreen,
  },
  {
    defaultNavigationOptions: {
      title: "History",
    },
  }
);

export default createAppContainer(
  createBottomTabNavigator(
    {
      Home: HomeStack,
      Settings: SettingsStack,
      History: HistoryStack,
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === "Home") {
            // To Do Set Tab Icon here
          } else if (routeName === "Settings") {
            // To Do Set Tab Icon here
          } else if (routeName === "History") {
            // To Do Set Tab Icon here
          }
        },
      }),
      // To Do Set Tab Focus  color here
      tabBarOptions: {
        activeTintColor: "green",
        inactiveTintColor: "gray",
      },
    }
  )
);
