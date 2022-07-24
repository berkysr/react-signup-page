import React from 'react';
import logo from './logo.svg';
import './App.scss';
import ButtonComponent from './components/button.component';
import NavigationComponent from './components/navigation.component';
import FooterComponent from './components/footer.component';
import SignUpPage from './pages/sign-up.page';

function App() {
  return (
    <div className="App">
      <NavigationComponent></NavigationComponent>
      <SignUpPage></SignUpPage>
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
