import {Box, HStack, Image,
    Input,
    InputGroup,
    InputLeftElement,
    Switch,
    useColorMode} from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { SearchIcon } from "@chakra-ui/icons";
import { color } from "framer-motion";

const NavBar = () => {

  

  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <HStack width={'100%'} >
        <Image src={logo} boxSize={"60px"} ></Image>
        <InputGroup >
            <InputLeftElement pointerEvents="none">
              <SearchIcon></SearchIcon>
            </InputLeftElement>
            <Input borderRadius={50} type="text" placeholder="Search games..." />
        </InputGroup>
        <Switch isChecked={colorMode ==='dark'} onChange={toggleColorMode}></Switch>
        <Box width={'100px'}>
          <p>Dark Mode</p>
        </Box>

    </HStack>
  )
}

export default NavBar