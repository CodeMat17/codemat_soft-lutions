import { Box, Container, Heading, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import { features } from "../databank/featuresData";
import FeaturesCard from "./FeaturesCard";

function Features() {
  const bg = useColorModeValue("purple.100", "");
 const color = useColorModeValue("purple.900", "");

  return (
    <Box id='features' px='4' py='12' bg={bg}>
      <Heading textAlign='center' size='xl' color={color}>
        FEATURES
      </Heading>
      <Box mt='4' maxW='6xl' mx='auto'>
        <SimpleGrid columns={[1, 1, 2, 3]} spacing='40px'>
          {features.map((feature) => (
            <FeaturesCard key={feature.id} {...feature} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Features;
