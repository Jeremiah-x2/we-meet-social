import {
  Box,
  Center,
  Flex,
  For,
  Heading,
  Image,
  Span,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import { BiHome, BiMessage } from "react-icons/bi";
import { LuEllipsis, LuUsers } from "react-icons/lu";
import { ILink } from "@/components/elements";
import { Avatar } from "@/components/ui/avatar";
import {
  PopoverBody,
  PopoverContent,
  PopoverRoot,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FileUploadRoot, FileUploadTrigger } from "@/components/ui/file-upload";
import { HiUpload } from "react-icons/hi";
import { Cloudinary, CloudinaryImage } from "@cloudinary/url-gen";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { AdvancedImage } from "@cloudinary/react";

export default function Dashboard() {
  return (
    <Flex minH={"100dvh"} gap={8}>
      <Box
        layerStyle={"outline.subtle"}
        py={6}
        pl={12}
        pr={20}
        minH={"full"}
        rounded={"xl"}
      >
        <Box spaceY={6}>
          <Heading textStyle={"2xl"}>
            We.<Span textStyle={"sm"}>Meet</Span>
          </Heading>
          <Stack>
            <For each={urls}>
              {(path, i) => (
                <ILink
                  key={i}
                  to={path.url}
                  display={"flex"}
                  alignItems={"center"}
                  gap={4}
                >
                  {path.icon} {path.text}
                </ILink>
              )}
            </For>
          </Stack>
          <Flex align={"center"} gap={2}>
            <Avatar name="Display Picture" src="" size={"lg"} />
            <Stack gap={0}>
              <Heading textStyle={"md"}>Fullname</Heading>
              <Text textStyle={"xs"}>@username</Text>
            </Stack>
            <PopoverRoot>
              <PopoverTrigger asChild>
                <LuEllipsis />
              </PopoverTrigger>
              <PopoverContent w={"auto"}>
                <PopoverBody>
                  <DialogRoot>
                    <DialogTrigger asChild>
                      <Button>View Profile</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogCloseTrigger />
                      <DialogHeader>
                        <DialogTitle>Profile</DialogTitle>
                      </DialogHeader>
                      <DialogBody>
                        <Stack spaceY={6}>
                          <Stack alignItems={"center"}>
                            <Image
                              src="/images/dp.jpeg"
                              w={"100px"}
                              h={"100px"}
                              rounded={"full"}
                            />
                            <Center>
                              <FileUploadRoot>
                                <FileUploadTrigger asChild>
                                  <Button>
                                    <HiUpload /> Upload file
                                  </Button>
                                </FileUploadTrigger>
                              </FileUploadRoot>
                            </Center>
                          </Stack>

                          <Stack textAlign={"center"} gap={6}>
                            <Stack>
                              <Heading>Fullname:</Heading> <Text>My Name</Text>
                            </Stack>
                            <Stack>
                              <Heading>Username:</Heading>{" "}
                              <Text>@myusername</Text>
                            </Stack>
                            <Stack>
                              <Heading>Bio: </Heading>
                              <Text>This is my bio</Text>
                            </Stack>
                          </Stack>
                        </Stack>
                      </DialogBody>
                      <DialogFooter>
                        <Button>Upgrade to pro</Button>
                      </DialogFooter>
                    </DialogContent>
                  </DialogRoot>
                </PopoverBody>
              </PopoverContent>
            </PopoverRoot>
          </Flex>
        </Box>
      </Box>
      <Box
        flex={"1"}
        layerStyle={"outline.subtle"}
        w={"full"}
        h={"100dvh"}
        overflowY={"scroll"}
        scrollbar={"hidden"}
        scrollBehavior={"smooth"}
        rounded={"3xl"}
        px={6}
        py={6}
      >
        <Outlet />
      </Box>
      <Box w={"380px"} layerStyle={"outline.subtle"}></Box>
    </Flex>
  );
}

const urls: { url: string; text: string; icon: ReactNode }[] = [
  { url: "", text: "Home", icon: <BiHome /> },
  { url: "friends", text: "Friends", icon: <LuUsers /> },
  { url: "messages", text: "Messages", icon: <BiMessage /> },
];
