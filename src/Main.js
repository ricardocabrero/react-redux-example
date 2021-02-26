import List from "./components/List";
import { Provider } from 'react-redux';
import store from './store/store';

const  Main = () => {

  return (
    <Provider store={store}>
      <List/>
    </Provider>
  );
}

export default Main;
