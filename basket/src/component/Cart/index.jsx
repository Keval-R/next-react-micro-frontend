"use client";
import React from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { Button, Row, Space, Table, Typography } from "antd";
import { store } from "host/hostStore";
import { useSelector, useDispatch } from "react-redux";

const { Text, Title } = Typography;

const columns = [
  {
    title: "Name",
    dataIndex: "title",
    key: "title",
    width: "400px",
    render: (text) => (
      <Text
        style={{
          maxWidth: "400px",
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
    title: "Description",
    dataIndex: "description",
    key: "description",
    width: "500px",
    render: (_, product) => (
      <Text
        style={{
          maxWidth: "500px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {product?.description}
      </Text>
    ),
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "Image",
    key: "image",
    dataIndex: "image",
    render: (_, product) => (
      <img src={product.image} alt={product.title} width="100" />
    ),
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    render: (_, product) => (
      <Text
        style={{
          maxWidth: "400px",
          display: "inline-block",
          whiteSpace: "normal",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        ${product?.price}
      </Text>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, product) => (
      <Space size="middle">
        <Button
          danger
          onClick={() => {
            store.dispatch({
              type: "products/removeProduct",
              payload: product,
            });
          }}
        >
          <DeleteOutlined style={{ fontSize: "16px" }} />
        </Button>
      </Space>
    ),
  },
];

const Cart = () => {
  const products = useSelector((state) => state.products) ?? [];

  return (
    <div>
      <Row justify="center" style={{ padding: "20px" }}>
        <Title level={2}>Basket List</Title>
      </Row>

      <Table
        columns={columns}
        scroll={{ x: "max-content" }}
        dataSource={products}
      />
    </div>
  );
};

export default Cart;
