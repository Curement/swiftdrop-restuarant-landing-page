import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { SearchIcon } from '@chakra-ui/icons';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import swiftlogo from '../../assets/swiftlogo.png';
import search from '../../assets/Nav items.png';
import divider from '../../assets/Divider.png';
import { Flex, Text, Icon, HStack } from '@chakra-ui/react';

function CustomNavbar() {
  return (
    <Navbar
      expand="lg"
      style={{ backgroundColor: '#dbffdc', padding: '5px 50px' }}
      className="custom-navbar"
    >
      <Container fluid>
        <Navbar.Brand href="#">
          <Flex>
            <img src={swiftlogo} alt="logo" className="logo" width={10} />
            <Text mt="2">
              Swif<span>drop</span>
            </Text>
          </Flex>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0 justify-content-center"
            style={{ maxHeight: '300px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" style={{ marginRight: '20px' }}>
              Home
            </Nav.Link>
            <Nav.Link href="#action2" style={{ marginRight: '20px' }}>
              Services
            </Nav.Link>
            <Nav.Link href="#action3" style={{ marginRight: '20px' }}>
              About
            </Nav.Link>
            <Nav.Link href="#action4" style={{ marginRight: '20px' }}>
              Feature
            </Nav.Link>
          </Nav>
          <HStack spacing={3}>
            <SearchIcon w="50px" fontSize="3rem" color="#4caf50" />
            <img src={divider} alt="" />
            <Button
              bg="#4caf50"
              color="black"
              _hover={{ bg: '#4caf50' }}
              type="submit"
              w="50%"
              borderRadius="10"
            >
              Get started
            </Button>
          </HStack>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;