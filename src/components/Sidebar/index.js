import React from 'react';
import {SidebarContainer, SidebarRoute, SidebarMenu, SidebarLink, SideBtnWrap, Icon, CloseIcon} from './SideBarElements'

const Sidebar = ({isOpen, toggle}) => {
  return(
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
       <Icon onClick={toggle}>
         <CloseIcon/>
       </Icon>

       <SidebarMenu>
          <SidebarLink to='/'>Pizza</SidebarLink>
          <SidebarLink to='/'>Desert</SidebarLink>
          <SidebarLink to='/'>Full SidebarMenu</SidebarLink>

       </SidebarMenu>

       <SideBtnWrap>
          <SidebarRoute to='/'>Order Now</SidebarRoute>
       </SideBtnWrap>

    </SidebarContainer>
  )
}
export default Sidebar;
