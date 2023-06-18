import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <HStack overflow="hidden" bg="white" align="flex-start" borderRadius="12">
      <VStack overflow="hidden" align="flex-start">
        <Image src={imageSrc} alt="cartd" />
        <Box p="4">
          <Heading as="h5" size="sm" color="#000">
            {title}
          </Heading>
          <Text color="#666" pt="4" pb="4">
            {description}
          </Text>
          <Text color="#333" fontWeight="500">
            <a href="#">
              See More <FontAwesomeIcon icon={faArrowRight} size="1x"  />
            </a>
          </Text>
        </Box>
      </VStack>
    </HStack>
  );
};

export default Card;
