import React from "react";
import { Container, Box, VStack, HStack, Text, Image, Button, IconButton, Heading } from "@chakra-ui/react";
import { FaShoppingCart, FaHeart } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Comfortable Sofa",
    description: "A plush, comfortable sofa perfect for your living room.",
    price: "$499",
    image: "https://images.unsplash.com/photo-1685397642289-384bc5a20acd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb21mb3J0YWJsZSUyMHNvZmF8ZW58MHx8fHwxNzE1OTkyNDE2fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Cozy Blanket",
    description: "A warm and cozy blanket for those chilly nights.",
    price: "$49",
    image: "https://images.unsplash.com/photo-1602891867080-1d56348202a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb3p5JTIwYmxhbmtldHxlbnwwfHx8fDE3MTU5OTI0MTd8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    name: "Soft Pillow",
    description: "A soft pillow that provides excellent neck support.",
    price: "$29",
    image: "https://images.unsplash.com/photo-1550328927-3b33885318fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2Z0JTIwcGlsbG93fGVufDB8fHx8MTcxNTk5MjQxOXww&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const ProductCard = ({ product }) => (
  <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} width="100%">
    <Image src={product.image} alt={product.name} boxSize="200px" objectFit="cover" mx="auto" />
    <VStack spacing={2} mt={4}>
      <Heading size="md">{product.name}</Heading>
      <Text>{product.description}</Text>
      <Text fontWeight="bold">{product.price}</Text>
      <HStack spacing={4}>
        <Button leftIcon={<FaShoppingCart />} colorScheme="teal">
          Add to Cart
        </Button>
        <IconButton aria-label="Add to Wishlist" icon={<FaHeart />} colorScheme="pink" />
      </HStack>
    </VStack>
  </Box>
);

const Index = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8}>
        <Heading>Home Comfort Products</Heading>
        <HStack spacing={8} wrap="wrap" justify="center">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
