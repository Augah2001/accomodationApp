import { useColorModeValue, Stack, FormControl, FormLabel, Input, Checkbox, Button, Box, Text, Link } from '@chakra-ui/react';
import { Link as LinkRouter } from "react-router-dom";
import React from 'react'

const LoginCard = () => {
  return (
    <Box rounded={"lg"} bg={useColorModeValue("white", "gray.700")} p={8}>
      <Stack spacing={4}>
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input type="password" />
        </FormControl>
        <Stack spacing={10}>
          <Stack
            direction={{ base: "column", sm: "row" }}
            align={"start"}
            justify={"space-between"}
          >
            <Checkbox>Remember me</Checkbox>
            <Text color={"pink.500"}>Forgot password?</Text>
          </Stack>
          <Button
            bg={"pink.600"}
            color={"white"}
            _hover={{
              bg: "pink.500",
            }}
          >
            Sign in
          </Button>
          <Text align={"center"}>
            Don't have an account?{" "}
            <LinkRouter to="/signup">
              {" "}
              <Link color="pink.400">login</Link>
            </LinkRouter>
          </Text>
        </Stack>
      </Stack>
    </Box>
  );
}

export default LoginCard