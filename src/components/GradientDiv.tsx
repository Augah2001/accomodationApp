import { Box } from "@chakra-ui/react";

interface Props {
    width: string;
}


const GradientDiv = ({width}: Props) => {
    
    return (
      <Box marginX={5}>
        <Box
          width={width}
          h="1px"
          bgGradient="linear(to-r, transparent, purple.700)"
        ></Box>
        <Box
          width={width}
          
          h="1px"
          bgGradient="linear(to-r, purple.600 ,transparent)"
        ></Box>
      </Box>
    );
}

export default GradientDiv