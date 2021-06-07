import React from "react";
import { Button, ButtonGroup, Container, Dropdown, Menu } from "semantic-ui-react";
export default function Navi() {
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            <Menu.Item>
                <Button.Group>
                    <Button primary>Sign In</Button>
                    <Button.Or text="<->" />
                    <Button primary>Sign Up</Button>
                </Button.Group>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
