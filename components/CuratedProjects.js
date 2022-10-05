import { Box, Heading, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import { projects } from "../databank/projectData";
import CuratedProjectsCard from "./CuratedProjectsCard";

function CuratedProjects() {
 const bg = useColorModeValue("purple.100", "");
 const color = useColorModeValue("purple.900", "");

  return (
    <Box id='projects' bg={bg} px='4' py='12'>
      <Heading textAlign='center' size='xl' color={color}>
        CURATED PROJECTS
      </Heading>
      <SimpleGrid mt='12' columns={[1, 1, 2, 3]} spacingY='15px' maxW='6xl' mx='auto'>
        {projects.map((project) => (
          <CuratedProjectsCard key={project.id} {...project} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default CuratedProjects;
