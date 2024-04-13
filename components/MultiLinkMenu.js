import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { MdOutlineMarkEmailRead, MdOutlineWifiCalling3 } from "react-icons/md";
import { RiWechatLine } from "react-icons/ri";
import { SiWhatsapp } from "react-icons/si";
import ModalForm from "./ModalForm";

function MultiLinkMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const multiRef = useRef(null);

  return (
    <Box>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label='Options'
          icon={<RiWechatLine size={40} />}
          isRound
          size='lg'
        />
        <MenuList>
          <MenuItem
            as='a'
            href='tel:+2348063856120'
            icon={<MdOutlineWifiCalling3 size={25} />}>
            Call us
          </MenuItem>
          <MenuItem
            as='a'
            href='https://wa.me/+2348063856120?text=Hello! CodeMat Soft-lutions, I am here for business.'
            icon={<SiWhatsapp size={25} color='green' />}>
            Chat with us on WhatsApp
          </MenuItem>
          <MenuItem
            ref={multiRef}
            as='button'
            onClick={onOpen}
            // href='mailto:ask@soft-lutions.com.ng?subject=Business Email'
            icon={<MdOutlineMarkEmailRead size={25} color='tomato' />}>
            Send an email to us
          </MenuItem>
        </MenuList>
      </Menu>
      <ModalForm finalFocusRef={multiRef} isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}

export default MultiLinkMenu;
