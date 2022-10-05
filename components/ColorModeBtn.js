import { IconButton, useColorMode } from "@chakra-ui/react";
import { FiSun } from "react-icons/fi";
import { HiMoon } from "react-icons/hi";

function ColorModeBtn() {
const {colorMode, toggleColorMode} = useColorMode()

  return (
    <IconButton
      onClick={toggleColorMode}
      icon={
        colorMode === "dark" ? (
          <FiSun size={25} color='orange' />
        ) : (
          <HiMoon size={25} color='black' />
        )
      }
      isRound
      variant='solid'
      _hover={{ bg: "purple.800" }}
    />
  );
}

export default ColorModeBtn;
