import { Box, Flex, For, Heading, Stack, Text } from "@chakra-ui/react";
import { Button } from "./ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/mousewheel";

export default function NewFriends() {
  return (
    <Box>
      <Stack>
        <Box>
          <Heading textStyle={"2xl"}>Make new friends</Heading>
          <Text textStyle={"md"}>
            Find and connect with individual of like/different interests
          </Text>
        </Box>
        <Swiper
          slidesPerView={4}
          style={{ flex: "1", width: "100%" }}
          modules={[Mousewheel]}
          mousewheel={{ enabled: true }}
        >
          {new Array(10).fill(null).map((_item, i) => (
            <SwiperSlide key={i}>
              <Flex
                direction={"column"}
                gap={4}
                key={i}
                w={"160px"}
                h={"220px"}
                layerStyle={"outline.subtle"}
                p={3}
                rounded={"lg"}
              >
                <Box flex={"1"}></Box>
                <Stack>
                  <Text>Full name</Text>
                  <Button>Add Friend</Button>
                </Stack>
              </Flex>
            </SwiperSlide>
          ))}
        </Swiper>
      </Stack>
    </Box>
  );
}
