import { Box, Divider, Flex, HStack, IconButton, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { BsTwitter, BsWhatsapp } from "react-icons/bs";
import { FiInstagram, FiPhoneCall } from "react-icons/fi";
import { GrFacebookOption } from "react-icons/gr";
import { RiMailSendLine } from "react-icons/ri";

function Footer() {
  return (
    <Box bg='purple.900' pt='12' pb='6' w='100%'>
      <Box maxW='6xl' mx='auto'>
        <Flex flexDir={["column", 'row']} align='' justify='space-between' mr='4'>
          {/* Connect with us */}
          <Box>
            <VStack align='start' spacing='0'>
              <Text px='4' color='white' fontSize='xl' fontWeight='semibold'>
                Connect With Us
              </Text>
              <HStack spacing='2' pr='4'>
                <IconButton
                  _hover={{ bg: "purple.800" }}
                  icon={<GrFacebookOption size={25} />}
                  variant='ghost'
                  color='facebook.200'
                  isRound={true}
                />
                <IconButton
                  _hover={{ bg: "purple.800" }}
                  icon={<BsTwitter size={25} />}
                  variant='ghost'
                  color='twitter.500'
                  isRound={true}
                />
                <IconButton
                  _hover={{ bg: "purple.800" }}
                  icon={<FiInstagram color='red' size='25' />}
                  variant='ghost'
                  isRound={true}
                />
                <IconButton
                  _hover={{ bg: "purple.800" }}
                  icon={<BsWhatsapp size='25' />}
                  variant='ghost'
                  color='whatsapp.500'
                  isRound={true}
                />
              </HStack>
              <VStack align='start' spacing='0' px='4' pt='8' color='gray.400'>
                <HStack>
                  <RiMailSendLine size='16' />
                  <Text fontSize='sm'>codemat.biz@gmail.com</Text>
                </HStack>
                <HStack>
                  <FiPhoneCall size='16' />
                  <Text fontSize='sm'>08063856120</Text>
                </HStack>
              </VStack>
            </VStack>
          </Box>
          <Box
            pos='relative'
            w='70px'
            h='70px'
            rounded='full'
            overflow='hidden'
            ml={[4, null, null]}
            mt={[6, null, null]}>
            <Image
              alt='logo'
              src='/logo.png'
              layout='fill'
              objectFit='contain'
            />
          </Box>
        </Flex>
        <Divider mt='6' />
        {/* last line */}
        <Box>
          <Text color='white' pt='8' textAlign='center'>
            &copy; 2022 CodeMat Soft-lutions. All rights reserved.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
