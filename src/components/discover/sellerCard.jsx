import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
export default function SellerCard() {
  return (
    <div className="flex flex-col items-center justify-evenly bg-light-white px-5 py-5 text-dark-green md:h-72 md:w-96">
      <h1 className="font-semibold">Corvette Stationery</h1>
      <Accordion allowToggle className="my-5">
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Seller description
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Take your love for speed and style to a whole new level with our
            exclusive Corvette stationery collection!
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Link
        className="rounded-md bg-dark-green px-4 py-2 text-white"
        to={"/shop/seller/10"}
      >
        View Products
      </Link>
    </div>
  );
}
