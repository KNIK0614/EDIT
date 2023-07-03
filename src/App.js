import React from 'react';
import { Provider } from 'react-redux';
import EducationForm from './redux/EducationForm';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <EducationForm />
      </div>
    </Provider>
  );
};

export default App;

