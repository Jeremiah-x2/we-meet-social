import { Avatar } from "@/components/ui/avatar";
import { Box, Flex, For, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { LuPhone, LuVideo } from "react-icons/lu";
import { useParams } from "react-router-dom";
import { io, Socket } from "socket.io-client";

const socket: Socket = io("http://localhost:5000");

export default function ChatPage() {
  const params = useParams();
  const [messages, setMessages] = useState<string[]>([]);
  useEffect(() => {
    // console.log(socket);
    async function fetchData() {
      try {
        const res = await fetch(
          `http://localhost:5000/chats/messages/${params.chatId}`
        );
        const data = await res.json();
        console.log("data... Messages... : ", data.messages);
        setMessages([...data.messages]);
        console.log("data... : ", data);
        socket.emit("joinRoom", params.chatId);
      } catch (error) {
        console.error(error);
        setMessages([]);
      }
    }

    fetchData();
    console.log("Hello world");
    socket.emit("sm", params.chatId);
    // socket.on("newMessage", (message: string) => {
    //   console.log("This is the message", message);
    //   console.log("messages ... ", messages);
    //   setMessages((prev) => [...prev, message]);
    // });

    // return () => {
    //   socket.disconnect();
    // };
  }, []);
  return (
    <Flex flexDirection={"column"} h={"full"} overflow={"hidden"} gap={4}>
      {JSON.stringify(messages)}
      <HStack
        justifyContent={"space-between"}
        layerStyle={"indicator.bottom"}
        pb={4}
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
        <Flex gap={3}>
          <LuPhone size={28} />
          <LuVideo size={28} />
        </Flex>
      </HStack>
      <Stack
        flex={"1"}
        overflowY={"scroll"}
        scrollbar={"hidden"}
        scrollBehavior={"smooth"}
      >
        <For each={new Array(10).fill(null)}>
          {(_item, i) => {
            const isEven = i % 2 === 0;
            return (
              <Text
                key={i}
                maxW={"450px"}
                alignSelf={isEven ? "start" : "end"}
                layerStyle={"outline.subtle"}
                bg={isEven ? "transparent" : "white"}
                color={isEven ? "" : "black"}
                py={3}
                px={4}
                rounded={"3xl"}
                borderBottomRightRadius={isEven ? "" : "xs"}
                borderBottomLeftRadius={isEven ? "xs" : ""}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                tenetur amet cum nostrum exercitationem quia blanditiis totam
                eius possimus.
              </Text>
            );
          }}
        </For>
      </Stack>
    </Flex>
  );
}
