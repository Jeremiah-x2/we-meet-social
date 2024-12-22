import { ILink } from "@/components/elements";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { PasswordInput } from "@/components/ui/password-input";
import { Box, Flex, Heading, Input, Stack, Text } from "@chakra-ui/react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { baseUrl } from "@/utils";
// import {} from "react-loading-spinner";

const formSchema = z.object({
  fullName: z.string({ message: "Enter your name" }),
  username: z
    .string({ message: "Create a username" })
    .min(3, { message: "Username should have a minimum of 3 characters" }),
  email: z.string().email(),
  password: z
    .string()
    .min(4, { message: "Password should be at least 4 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

export default function SignUpPage() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const createUser = async (values: FormValues) => {
    try {
      const res = await fetch(`${baseUrl()}users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(values),
      });
      console.log("Response: ", res);
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log("An Error occured: ", error);
      // console.log("An Error occured: ", error.message);
    }
  };

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
          <Heading textStyle={"2xl"}>Create Account</Heading>
          <Text textStyle={"sm"}>
            Create a new account and connect with friends.
          </Text>
        </Box>
        <form onSubmit={handleSubmit(createUser)}>
          <Stack px={16} spaceY={4}>
            <Field
              label="Full Name"
              required
              invalid={!!errors.fullName}
              errorText={errors.fullName?.message}
            >
              <Input
                placeholder="Enter your name"
                type="text"
                {...register("fullName", { required: "Enter your name" })}
              />
            </Field>

            <Field
              label="@Username"
              required
              invalid={!!errors.username}
              errorText={errors.username?.message}
            >
              <Input
                placeholder="Create a new username"
                type="text"
                {...register("username")}
              />
            </Field>

            <Field
              label="Email"
              required
              helperText="Your email is confidential."
              invalid={!!errors.email}
              errorText={errors.email?.message}
            >
              <Input
                placeholder="Enter your email"
                type="email"
                {...register("email")}
              />
            </Field>

            <Field
              label="Password"
              required
              invalid={!!errors.password}
              errorText={errors.password?.message}
            >
              <PasswordInput type="password" {...register("password")} />
            </Field>

            <Button type="submit" fontWeight={"semibold"}>
              Create Account
            </Button>
          </Stack>
        </form>
        <Text textAlign={"center"} textStyle={"sm"}>
          Already have an account?{" "}
          <ILink to={"/auth/login"} textDecor={"underline"} cursor={"pointer"}>
            Login
          </ILink>
        </Text>
      </Stack>
    </Flex>
  );
}
