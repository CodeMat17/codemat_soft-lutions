import { IconButton, VStack } from "@chakra-ui/react";
import { FaChevronCircleUp } from "react-icons/fa";


function ScrollBtn() {
  return (
    <VStack
      p='2'
      bg='purple.700'
      rounded='full'
      pos='fixed'
      bottom='28px'
      right={["16px", "84px"]}
      zIndex={1}>
      <IconButton
        icon={<FaChevronCircleUp size={40} />}
        colorScheme='purple'
        size='lg'
        isRound={true}
        shadow='dark-lg'
      />
    </VStack>
  );
}

export default ScrollBtn