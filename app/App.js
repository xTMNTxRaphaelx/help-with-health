import React, { useState } from "react";
import { Provider } from "react-redux";

import BaseNavigator from "./navigation/BaseNavigator";
import store from "./state";

export default function App() {
  return (
    <Provider store={store}>
      <BaseNavigator />
    </Provider>
  );
}
