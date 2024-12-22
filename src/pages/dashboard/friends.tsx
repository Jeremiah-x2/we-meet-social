import NewFriends from "@/components/new-friends";
import YourFriends from "@/components/your-friends";
import { Box, Stack } from "@chakra-ui/react";
import React from "react";

export default function Friends() {
  return (
    <Box spaceY={8}>
      <Box>
        <NewFriends />
      </Box>
      <Box>
        <YourFriends />
      </Box>
    </Box>
  );
}
