import { Avatar } from "@/components/ui/avatar";
import {
  For,
  Stack,
  Box,
  Flex,
  Text,
  Heading,
  Container,
} from "@chakra-ui/react";
import React from "react";

export default function Messages() {
  return (
    <Stack spaceY={6}>
      <For each={new Array(10).fill(null)}>
        {(_item, i) => (
          <Box
            key={i}
            spaceY={4}
            layerStyle={"outline.subtle"}
            py={4}
            px={2}
            rounded={"xl"}
          >
            <Flex>
              <Flex gap={3}>
                <Avatar name="User Name" size={"xl"} />
                <Box>
                  <Heading textStyle={"md"}>Fullname</Heading>
                  <Text textStyle={"sm"}>@username</Text>
                </Box>
              </Flex>
            </Flex>
            <Container layerStyle={"outline.subtle"} py={4} rounded={"md"}>
              <Text lineClamp={1}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </Text>
            </Container>
          </Box>
        )}
      </For>
    </Stack>
  );
}
