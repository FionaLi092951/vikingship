import React, { useState, createContext } from 'react';
import classNames from 'classnames';
import { MenuItemProps } from './MenuItem';

type MenuMode = 'horizontal' | 'vertical';

type selectCallBack = (selectedIndex: string) => void;

export interface MenuProps {
  defaultIndex?: string;
  defaultOpenSubMenus?: string[];
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: selectCallBack;
}

interface IMenuContext {
  index: string;
  onSelect?: selectCallBack;
  mode?: MenuMode;
  defaultOpenSubMenus?: string[];
}

export const MenuContext = createContext<IMenuContext>({ index: '0' });

const Menu: React.FC<MenuProps> = (props) => {
  const {
    className,
    mode,
    style,
    children,
    defaultIndex,
    defaultOpenSubMenus,
    onSelect,
  } = props;
  const [currentActive, setActive] = useState(defaultIndex);

  // 样式
  const classes = classNames('viking-menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical'
  });

  const handleClick = (index: string) => {
    setActive(index);
    if (onSelect) {
      onSelect(index);
    }
  }

  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : '0',
    onSelect: handleClick,
    mode,
    defaultOpenSubMenus,
  };

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>;
      const { displayName } = childElement.type;
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        return React.cloneElement(childElement, {
          index: index.toString()
        });
      } else {
        console.error("Warning: Menu has a child which is not a MenuItem component")
      }
    });
  }

  return (
    <ul className={classes} style={style} data-testid="test-menu">
      <MenuContext.Provider value={passedContext}>
        { renderChildren() }
      </MenuContext.Provider>
    </ul>
  )
};

Menu.defaultProps = {
  defaultIndex: '0',
  mode: 'horizontal',
  defaultOpenSubMenus: [],
};

Menu.displayName = 'Menu';

export default Menu;