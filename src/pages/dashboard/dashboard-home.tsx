import { Avatar } from "@/components/ui/avatar";
import { Blockquote } from "@/components/ui/blockquote";
import {
  Badge,
  Box,
  Flex,
  For,
  Grid,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import { BiHeart, BiHeartCircle, BiMessage } from "react-icons/bi";
import { LuShare } from "react-icons/lu";

export default function DashboardHome() {
  return (
    <Box>
      <Stack spaceY={4}>
        <For each={new Array(10).fill(null)}>
          {(_item, i) => (
            <Flex key={i} gap={3}>
              <Avatar name="Testing Image" size={"xl"} />
              <Flex gap={3} direction={"column"} flex={"1"}>
                <Box>
                  <Heading textStyle={"sm"}>Fullname</Heading>
                  <Text textStyle={"xs"}>@username</Text>
                </Box>
                <Flex layerStyle={"outline.subtle"} gap={8}>
                  <Box
                    layerStyle={"outline.subtle"}
                    flex={"1"}
                    px={2}
                    py={4}
                    rounded={"xl"}
                    spaceY={4}
                  >
                    <Blockquote cite="username" showDash lineClamp={5}>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Eos omnis laborum quas tempora vitae, illum laudantium non
                      veniam nam in, hic nostrum possimus veritatis inventore,
                      sint molestias enim fuga? Itaque.
                      {i % 2 === 0 && (
                        <>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Iure aut ex quisquam, ab odit quaerat mollitia
                          corrupti repellat, quasi eveniet assumenda accusamus
                          dolores. Enim ipsum sunt distinctio iure, nostrum
                          tempora.
                        </>
                      )}
                    </Blockquote>
                    <HStack mt={4}>
                      <Badge size={"lg"}>tag</Badge>
                      <Badge size={"lg"}>tag</Badge>
                      <Badge size={"lg"}>tag</Badge>
                    </HStack>
                    <Grid templateColumns={"repeat(2, 1fr)"} gap={4}>
                      <For each={new Array(4).fill(null)}>
                        {(_item, i) => (
                          <Box
                            key={i}
                            rounded={"md"}
                            h={"150px"}
                            layerStyle={"outline.subtle"}
                          ></Box>
                        )}
                      </For>
                    </Grid>
                  </Box>
                  <Flex direction={"column"} gap={8}>
                    <BiHeart size={20} />
                    <BiMessage size={20} strokeLinecap="round" />
                    <LuShare size={20} />
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          )}
        </For>
      </Stack>
    </Box>
  );
}
