import React,{ useContext, useState, FunctionComponentElement } from 'react'
import classNames from 'classnames';
import { MenuItemProps } from './MenuItem';
import { MenuContext } from './Menu';

interface SubMenuProps {
  title: string;
  index?: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const SubMenu: React.FC<SubMenuProps> = (props) => {
  const context = useContext(MenuContext);
  
  

  const {
    title,
    className,
    style,
    index,
    children,
  } = props;

  const openedSubMenus = context.defaultOpenSubMenus as Array<String>;
  const isOpend = (index && context.mode === 'vertical') ? openedSubMenus.includes(index) : false;

  // SubMenu折叠/收起
  const [menuOpen, setOpen] = useState(isOpend);

  const classes = classNames('menu-item submenu-item', className, {
    'is-opened': menuOpen,
  });

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(!menuOpen);
  };

  let timer: any
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer)
    e.preventDefault()
    timer = setTimeout(() => {
      setOpen(toggle)
    }, 300)
  }
  const clickEvents = context.mode === 'vertical' ? {
    onClick: handleClick
  } : {}
  const hoverEvents = context.mode !== 'vertical' ? {
    onMouseEnter: (e: React.MouseEvent) => { handleMouse(e, true)},
    onMouseLeave: (e: React.MouseEvent) => { handleMouse(e, false)}
  } : {}

  const renderChildren = () => {
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>;
      const { displayName } = childElement.type;
      console.log(displayName);
      if(displayName === 'MenuItem') {
        return React.cloneElement(childElement, {
          index: `${index}-${i}`
        })
      } else {
        console.log("Warning: SubMenu has a child which is not a MenuItem component")
      }
    });
    const subMenuClasses = classNames('viking-submenu', {
      'menu-opened': menuOpen
    })
    return (
      <ul className={subMenuClasses}>
        {childrenComponent}
        {menuOpen}
      </ul>
    )
  };

  return (
    <li className={classes} style={style} {...hoverEvents}>
      <div className="submenu-title" {...clickEvents}>{title}</div>
      {renderChildren()}
    </li>
  )
}

SubMenu.displayName = 'SubMenu';

export default SubMenu;