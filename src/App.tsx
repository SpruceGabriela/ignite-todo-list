import Header from "./components/Header/Header";
import MainContainer from "./components/MainContainer";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <main className="App">
        <Header />
        <MainContainer />
      </main>
    </Provider>
  );
};

export default App;
