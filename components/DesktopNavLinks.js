import { Button } from "@chakra-ui/react";
import { Link } from "react-scroll";

function DesktopNavLinks({ item, to, spy, smooth, offset, duration }) {
  return (
    <Link to={to} spy={spy} smooth={smooth} offset={offset} duration={duration}>
      <Button
        py='4'
        size={["xs", "xs", "xs", "md"]}
        variant='ghost'
        color='white'
        _hover={{ bg: "purple.800", color: "#07f819" }}
        letterSpacing='1px'
        fontSize='14'>
        {item}
      </Button>
    </Link>
  );
}

export default DesktopNavLinks;
