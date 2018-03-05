import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'

const DropdownExamplePointingTwo = () => (
  <Menu vertical>
    <Menu.Item>
      Home
    </Menu.Item>
    <Menu.Item>
      Story
    </Menu.Item>
    <Menu.Item>
      Trivia Game
    </Menu.Item>
    <Dropdown text='About' pointing='left' className='link item'>
      <Dropdown.Menu>
        <Dropdown.Item>Editors</Dropdown.Item>
        <Dropdown.Item>Bibliography</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </Menu>
)

export default DropdownExamplePointingTwo


function run() {    
  setTimeout(removeLoader, 2000);    
}
function removeLoader() {
  document.getElementById("loader").style.display = "none";
}
run();
