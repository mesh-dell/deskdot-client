import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import OrderItem from "../../components/orders/orderItem";

import { getOrder } from "../../services/orderService";
import { useLoaderData } from "react-router-dom";
import { getProduct } from "../../services/productService";

export async function loader({ params }) {
  const { orderId } = params;
  const user = JSON.parse(localStorage.getItem("user"));
  const order = await getOrder(user, orderId);

  const orderItemsWithProducts = await Promise.all(
    order.orderItems.map(async (item) => {
      const product = await getProduct(item.product_id);
      return { ...item, productName: product.product_name }; // Attach product name
    }),
  );

  return { order: { ...order, orderItems: orderItemsWithProducts } };
}

export default function OrderDetails() {
  const formatDate = (date) => {
    const d = new Date(date);
    return d.toLocaleString();
  };

  const calculateTotal = (order) => {
    let totalCost = 0;

    order.orderItems.forEach((item) => {
      const itemCost = parseFloat(item.price) * parseInt(item.quantity);
      totalCost += itemCost;
    });

    return totalCost;
  };

  const { order } = useLoaderData();
  console.log(order);

  return (
    <div className="space-y-5 text-dark-green">
      <div className="mb-5 flex items-center justify-between">
        <h1 className="font-semibold">Order Details</h1>
        <button className="rounded-md bg-light-green px-6 py-2 font-semibold">
          Cancel
        </button>
      </div>

      <TableContainer className="font-sans text-dark-green">
        <Table variant="striped" size={"md"}>
          <TableCaption>Your Order</TableCaption>
          <Thead>
            <Tr>
              <Th>#Order ID</Th>
              <Th>Order Date</Th>
              <Th>Order Cost</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>{order.order.order_id}</Td>
              <Td>{formatDate(order.order.order_date)}</Td>
              <Td>Ksh. {calculateTotal(order)}</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>

      <div className="grid-cols-2 gap-4 space-y-4 md:grid md:space-y-0">
        {order.orderItems.map((item) => (
          <OrderItem
            key={item.order_item_id}
            quantity={item.quantity}
            price={item.price}
            status={item.status}
            name={item.productName}
          />
        ))}
      </div>
    </div>
  );
}
