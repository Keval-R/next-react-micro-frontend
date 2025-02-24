import React from "react";
import { DeleteOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Space, Table, Typography, } from "antd";
import { useSelector, useDispatch } from "react-redux";

const { Text } = Typography;

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products) ?? [];

  // Handle removing a product from the cart
  const handleRemoveFromCart = (productId) => {
    dispatch({ type: "products/removeProduct", payload: productId });
  };

  // Handle increasing the product quantity
  const handleIncreaseQuantity = (productId) => {
    dispatch({ type: "products/increaseQuantity", payload: productId });
  };

  // Handle decreasing the product quantity
  const handleDecreaseQuantity = (productId) => {
    dispatch({ type: "products/decreaseQuantity", payload: productId });
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "title",
      key: "title",
      width: "200px",
      render: (text) => (
        <Text
          style={{
            maxWidth: "200px",
            display: "inline-block",
            whiteSpace: "normal",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {text}
        </Text>
      ),
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      width: "150px",
    },
    {
      title: "Image",
      key: "image",
      dataIndex: "image",
      render: (_, product) => (
        <img
          src={product.image}
          alt={product.title}
          style={{ width: "100px", objectFit: "contain" }}
        />
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (_, product) => (
        <Text strong>${product.price}</Text>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, product) => (
        <Space size="middle">
          <Button
            shape="circle"
            icon={<MinusOutlined />}
            onClick={() => handleDecreaseQuantity(product.id)}
            disabled={product.quantity <= 1}
          />
          <Text strong>{product.quantity}</Text>
          <Button
            shape="circle"
            icon={<PlusOutlined />}
            onClick={() => handleIncreaseQuantity(product.id)}
          />
          <Button
            type="primary"
            danger
            icon={<DeleteOutlined />}
            onClick={() => handleRemoveFromCart(product.id)}
          />
        </Space>
      ),
    },
  ];

  return (
    <div>
      {products.length === 0 ? (
        <div style={{ textAlign: "center", padding: "50px 0" }}>
          <span>No products in the cart</span>
        </div>
      ) : (
        <Table
          columns={columns}
          scroll={{ x: "max-content" }}
          dataSource={products}
          rowKey="id"
        />
      )}
    </div>
  );
};

export default Cart;
