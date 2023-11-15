import { Button, List, ListItem } from '@chakra-ui/react';
import React from 'react'

const ListGroup = (d) => {
  return (
    <List marginTop={4}>
      {locations.map((location) => (
        <ListItem
          _selected={{ fontSize: "2xl" }}
          key={location.id}
          _hover={{ bg: "purple.600" }}
          color={"white"}
          paddingLeft={4}
          paddingTop={2}
          height={"40px"}
          borderRadius={3}
          onClick={() => setSelectedLocation(location.name)}
        >
          <Button variant={"link"}>{location.name}</Button>
        </ListItem>
      ))}
    </List>
  );
}

export default ListGroup