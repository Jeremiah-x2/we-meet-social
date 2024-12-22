import { ILink } from "@/components/elements";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { PasswordInput } from "@/components/ui/password-input";
import { Box, Flex, Heading, Input, Stack, Text } from "@chakra-ui/react";

export default function SignInPage() {
  return (
    <Flex w={"1/2"} align={"center"} minH={"full"}>
      <Stack
        w={"full"}
        maxW={"600px"}
        layerStyle={"outline.solid"}
        py={12}
        rounded={"2xl"}
        bg={"black"}
        spaceY={8}
      >
        <Box textAlign={"center"}>
          <Heading textStyle={"2xl"}>Welcome Back</Heading>
          <Text textStyle={"sm"}>Continue connecting/making friends.</Text>
        </Box>
        <form>
          <Stack px={16} spaceY={4}>
            <Field
              label="Email"
              required
              helperText="Your email is confidential."
            >
              <Input placeholder="Enter your email" type="email" name="email" />
            </Field>

            <Field label="Password" required>
              <PasswordInput type="password" name="password" />
            </Field>

            <Button type="submit" fontWeight={"semibold"}>
              Create Account
            </Button>
          </Stack>
        </form>
        <Text textAlign={"center"} textStyle={"sm"}>
          Don&apos;t have an account?{" "}
          <ILink
            to={"/auth/register"}
            textDecor={"underline"}
            cursor={"pointer"}
          >
            Sign Up
          </ILink>
        </Text>
      </Stack>
    </Flex>
  );
}
