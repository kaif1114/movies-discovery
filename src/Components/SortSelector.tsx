import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { orderByObj } from "./MainDisplay";
import { ChevronDownIcon } from "@chakra-ui/icons";
interface Props {
  onChange: (order: orderByObj) => void;
  currentOrder: orderByObj;
}

const SortSelector = (props: Props) => {
  const sortOptions = [
    {
      value: "popularity.desc",
      label: "Popularity Descending",
    },
    {
      value: "popularity.asc",
      label: "Popularity Ascending",
    },
    {
      value: "vote_count.desc",
      label: "Vote Count Descending",
    },
    {
      value: "vote_count.asc",
      label: "Vote Count Ascending",
    },
  ];
  return (
    <>
      <Menu >
        <MenuButton mb={3} as={Button} rightIcon={<ChevronDownIcon />}>
          {"Sort By: " + props.currentOrder.label}
        </MenuButton>
        <MenuList>
        {sortOptions.map((option) => (
          <MenuItem  key={option.value} value={option.value} onClick={() => props.onChange(option)}>
            {option.label}
          </MenuItem>
        ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default SortSelector;
