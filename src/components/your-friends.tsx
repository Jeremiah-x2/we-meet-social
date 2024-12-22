import { Box, Card, Grid, Image } from "@chakra-ui/react";
import React from "react";
import { Button } from "./ui/button";

export default function YourFriends() {
  return (
    <Grid templateColumns={"repeat(2, 1fr)"} gap={4}>
      {new Array(8).fill(null).map((_item, i) => (
        <Card.Root key={i} flexDir={"row"} overflow={"hidden"} maxW={"sm"}>
          <Image
            objectFit={"cover"}
            w={"120px"}
            h={"full"}
            layerStyle={"outline.solid"}
            src={`/images/img${i + 1}.avif`}
          />
          <Box>
            <Card.Body>
              <Card.Title mb={2} lineClamp={1}>
                Friend Name
              </Card.Title>
              <Card.Description lineClamp={2} textStyle={"sm"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, earum quas blanditiis itaque labore sit? Nemo illo non
                perspiciatis dolorem in unde beatae, iure maiores dolorum, iusto
                expedita, esse debitis.
              </Card.Description>
            </Card.Body>
            <Card.Footer>
              <Button>Unfriend</Button>
            </Card.Footer>
          </Box>
        </Card.Root>
      ))}
    </Grid>
  );
}
