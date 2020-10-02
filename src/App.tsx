import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/Button';
import Alert, { AlertType } from './components/Alert/Alert';
import Menu from './components/Menu/Menu';
import MenuItem from './components/Menu/MenuItem';
import SubMenu from './components/Menu/SubMenu';
import './styles/index.scss';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="meu-wrapper">
        <h3>Menu组件</h3>
        <h5>Menu Horizontal</h5>
        <Menu defaultIndex="2" onSelect={(index) => { console.log(index) }}>
          <MenuItem>menu item 1</MenuItem>
          <MenuItem disabled>menu item 2</MenuItem>
          <MenuItem>menu item 3</MenuItem>
          {/* <li>should not be displayed</li> */}
          <SubMenu title="SubMenuItem">
            <MenuItem>Sub Menu Item 1</MenuItem>
            <MenuItem>Sub Menu Item 2</MenuItem>
            <MenuItem>Sub Menu Item 3</MenuItem>
          </SubMenu>
        </Menu>
        <h5>Menu Vertical</h5>
        <Menu
          defaultOpenSubMenus={['3']}
          mode="vertical"
          defaultIndex="0"
          onSelect={(index) => { console.log(index) }}>
          <MenuItem>menu item 1</MenuItem>
          <MenuItem disabled>menu item 2</MenuItem>
          <MenuItem>menu item 3</MenuItem>
          <SubMenu title="SubMenuItem">
            <MenuItem>Sub Menu Item 1</MenuItem>
            <MenuItem>Sub Menu Item 2</MenuItem>
            <MenuItem>Sub Menu Item 3</MenuItem>
          </SubMenu>
        </Menu>
      </div>
      <div className="button-wrapper">
        <h3>Button组件</h3>
        <h5>不同的ButtonType</h5>
        <Button btnType={ButtonType.Primary}>Primary</Button>
        <Button btnType={ButtonType.Default} className="custom">Default</Button>
        <Button btnType={ButtonType.Danger} onClick={(e) => {e.preventDefault(); alert('123'); }}>Danger</Button>
        <Button btnType={ButtonType.Link} target="_blank" href="http://www.baidu.com">Link</Button>
        <h5>不同的ButtonSize</h5>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Large</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>Small</Button>
        <Button btnType={ButtonType.Primary}>Normal</Button>
        <h5>Disable状态</h5>
        <Button btnType={ButtonType.Primary} disabled={true}>Disable</Button>
        <Button btnType={ButtonType.Link} disabled={true}>Disable</Button>
      </div>
      <div className="alert-wrapper">
        <h3>Alert组件</h3>
        <Alert
          closable
          title="this is Success"
          type={AlertType.Success}
        />
        <Alert
          closable
          title="this is Danger!"
          type={AlertType.Danger}
        />
        <Alert
          closable={false}
          title="this is Warning!"
          type={AlertType.Warning}
        />
        <Alert
          title="this is Default!"
        />
        <Alert
          title="this is Default!"
          description="this is description of alert this is description of alert this is description of alert"
        />
      </div>
    </div>
  );
}

export default App;
