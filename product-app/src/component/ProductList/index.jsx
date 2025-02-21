"use client";
import React from "react";

import { useGetProductsQuery } from "@/api/productApi";
import { Button, Row, Space, Table, Typography } from "antd";
import { addProduct } from "host/hostStore";
import { useDispatch } from "react-redux";
const { Text, Title } = Typography;

const ProductList = () => {
  const dispatch = useDispatch();

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
      render: (_, product) => {
        return (
          <Space size="middle">
            <Button
              type="primary"
              onClick={() => {
                dispatch(addProduct(product));
              }}
            >
              Add
            </Button>
          </Space>
        );
      },
    },
  ];

  const { data: products, error, isLoading } = useGetProductsQuery();

  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p>Error fetching products.</p>;

  const dataSource =
    products.map((product) => ({
      ...product,
      key: product.id.toString(), // Ensure it's a string
    })) || [];

  return (
    <div>
      <Row justify="center" style={{ padding: "20px" }}>
        <Title level={2}>Product List</Title>
      </Row>

      <Table
        columns={columns}
        scroll={{ x: "max-content" }}
        dataSource={dataSource}
      />
    </div>
  );
};

export default ProductList;
