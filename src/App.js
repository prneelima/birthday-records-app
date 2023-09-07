import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import BirthdayTable from './hoc/WithTable';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
    <Provider store={store}>
      <BirthdayTable />
    </Provider>
    </div>
  );
}

export default App;
