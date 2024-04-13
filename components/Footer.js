import {
  Box,
  Divider,
  Flex,
  HStack,
  IconButton,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { BsTwitter, BsWhatsapp } from "react-icons/bs";
import { FiInstagram, FiPhoneCall } from "react-icons/fi";
import { GrFacebookOption } from "react-icons/gr";
import { RiMailSendLine } from "react-icons/ri";
import ModalForm from "./ModalForm";

function Footer() {
  const footerRef = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg='purple.900' pt='12' pb='6' w='100%'>
      <Box maxW='6xl' mx='auto'>
        <Flex
          flexDir={["column", "row"]}
          align=''
          justify='space-between'
          mr='4'>
          {/* Connect with us */}
          <Box>
            <VStack align='start' spacing='0'>
              <Text px='4' color='white' fontSize='xl' fontWeight='semibold'>
                Connect With Us
              </Text>
              <HStack spacing='2' pr='4'>
                <Link href='https://web.facebook.com/?sk=welcome&_rdc=10&_rdr'>
                  <a>
                    <IconButton
                      _hover={{ bg: "purple.800" }}
                      icon={<GrFacebookOption size={25} />}
                      variant='ghost'
                      color='facebook.200'
                      isRound={true}
                    />
                  </a>
                </Link>

                <Link href='https://twitter.com/Soft_lutions'>
                  <a>
                    <IconButton
                      _hover={{ bg: "purple.800" }}
                      icon={<BsTwitter size={25} />}
                      variant='ghost'
                      color='twitter.500'
                      isRound={true}
                    />
                  </a>
                </Link>

                <Link href='https://www.instagram.com/soft_lutions/'>
                  <a>
                    <IconButton
                      _hover={{ bg: "purple.800" }}
                      icon={<FiInstagram color='red' size='25' />}
                      variant='ghost'
                      isRound={true}
                    />
                  </a>
                </Link>

                <Link href='https://wa.me/+2348063856120'>
                  <a>
                    <IconButton
                      _hover={{ bg: "purple.800" }}
                      icon={<BsWhatsapp size='25' />}
                      variant='ghost'
                      color='whatsapp.500'
                      isRound={true}
                    />
                  </a>
                </Link>
              </HStack>
              <VStack align='start' spacing='0' px='4' pt='8' color='gray.400'>
                <Box>
                  <HStack>
                    <RiMailSendLine size='16' />
                    <Text
                      as='button'
                      ref={footerRef}
                      onClick={onOpen}
                      fontSize='sm'>
                      codemat.biz@gmail.com
                    </Text>
                  </HStack>
                  <ModalForm
                    finalFocusRef={footerRef}
                    isOpen={isOpen}
                    onClose={onClose}
                  />
                </Box>

                <HStack>
                  <FiPhoneCall size='16' />
                  <Text as='a' href='tel:+2348063856120' fontSize='sm'>
                    2348063856120
                  </Text>
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
              src='/logo.webp'
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
