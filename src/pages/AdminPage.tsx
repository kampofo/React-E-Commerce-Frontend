import axios from "axios";
import React from "react";

interface IProduct {
  id?: number;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  category?: string;
  image_url?: string;
}

const AdminPage = () => {
  const addProduct = async (productData: IProduct) => {
    try {
      const response = await axios.post("/api/v1/products", productData, {
        headers: { "Content-Type": "application/json" },
      });
      console.log(response.data);
    } catch (error) {
      console.error(`Error adding product ${error}`);
    }
  };

  const updateProduct = async (productData: IProduct) => {
    try {
      const response = await axios.put(
        `/api/v1/products/${productData["id"]}`,
        productData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error(`Unable to update product ${error}`);
    }
  };

  const deleteProduct = async (productData: IProduct) => {
    try {
      const response = await axios.delete(
        `/api/v1/products/${productData["id"]}`
      );

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddProduct = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const formValues: IProduct = {
      name: String(formData.get("name") ?? ""),
      description: String(formData.get("description") ?? ""),
      price: Number(formData.get("price")),
      quantity: Number(formData.get("quantity")),
      category: String(formData.get("category") ?? ""),
      image_url: String(formData.get("imageUrl") ?? ""),
    };

    addProduct(formValues);
  };

  const handleUpdateProduct = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const formValues: IProduct = {
      id: Number(formData.get("id")),
      name: String(formData.get("name") ?? ""),
      description: String(formData.get("description") ?? ""),
      price: Number(formData.get("price")),
      quantity: Number(formData.get("quantity")),
      category: String(formData.get("category") ?? ""),
      image_url: String(formData.get("imageUrl") ?? ""),
    };

    updateProduct(formValues);
  };

  const handleDeleteProduct = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const formValues: IProduct = {
      id: Number(formData.get("id")),
    };

    deleteProduct(formValues);
  };

  return (
    <div>
      <h1>Admin Page</h1>

      <h2>Add Product</h2>
      <form onSubmit={handleAddProduct}>
        <label>
          Item Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Item Description:
          <input type="text" name="description" required />
        </label>
        <label>
          Price:
          <input type="number" name="price" step="0.01" min={0} required />
        </label>
        <label>
          Quantity:
          <input type="number" name="quantity" min={0} required />
        </label>
        <label>
          Category:
          <input type="text" name="category" required />
        </label>
        <label>
          Image Url:
          <input type="text" name="imageUrl" required />
        </label>
        <button type="submit">Submit</button>
      </form>

      <h2>Update Product</h2>
      <form onSubmit={handleUpdateProduct}>
        <label>
          Item Id:
          <input type="number" name="id" required />
        </label>
        <label>
          Item Name:
          <input type="text" name="name" />
        </label>
        <label>
          Item Description:
          <input type="text" name="description" />
        </label>
        <label>
          Price:
          <input type="number" name="price" step="0.01" min={0} />
        </label>
        <label>
          Quantity:
          <input type="number" name="quantity" min={0} />
        </label>
        <label>
          Category:
          <input type="text" name="category" />
        </label>
        <label>
          Image Url:
          <input type="text" name="imageUrl" />
        </label>
        <button type="submit">Submit</button>
      </form>

      <h2>Delete Product</h2>
      <form onSubmit={handleDeleteProduct}>
        <label>
          Item Id:
          <input type="number" name="id" required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AdminPage;
