import { StatusBar } from "expo-status-bar";
import Navigation from "./src/navigation";
import { Provider } from "react-redux";
import { store } from "./src/store/storee";
export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
      <StatusBar style="auto" />
    </Provider>
  );
}
