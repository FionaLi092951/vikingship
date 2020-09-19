import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/Button';
import './styles/index.scss';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>不同的ButtonType</h3>
        <Button btnType={ButtonType.Primary}>Primary</Button>
        <Button btnType={ButtonType.Default} className="custom">Default</Button>
        <Button btnType={ButtonType.Danger} onClick={(e) => {e.preventDefault(); alert('123'); }}>Danger</Button>
        <Button btnType={ButtonType.Link} target="_blank" href="http://www.baidu.com">Link</Button>
        <h3>不同的ButtonSize</h3>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Large</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>Small</Button>
        <Button btnType={ButtonType.Primary}>Normal</Button>
        <h3>Disable状态</h3>
        <Button btnType={ButtonType.Primary} disabled={true}>Disable</Button>
        <Button btnType={ButtonType.Link} disabled={true}>Disable</Button>
      </header>
    </div>
  );
}

export default App;
