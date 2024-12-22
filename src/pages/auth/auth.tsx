import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export default function AuthPage() {
  return (
    <Flex minH={"100dvh"} py={12}>
      <Flex w={"1/2"}></Flex>
      <Outlet />
    </Flex>
  );
}
