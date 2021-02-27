import { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import List from "./components/list/List";
import Form from './components/form/Form';
import Title from './components/title/Title';
import Filter from './components/filter/Filter';

const Main = () => {

  const [stateFilter, setStateFilter] = useState('all');

  return (
    <Provider store={store}>
      <div className="wrapper">
        <Filter 
        stateFilter={stateFilter}
        setStateFilter={setStateFilter}/>
        <Title/>
        <Form/>
        <List stateFilter={stateFilter}/>
      </div>
    </Provider>
  );
}

export default Main;
