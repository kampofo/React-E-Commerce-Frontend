import axios from "axios";
import React from "react";

// type NewProduct = {
//     name: string | null
//     description: string | null
//     price: number | null
//     quantity: number | null
//     category: string | null
//     imageUrl: string | null
// }

const AdminPage = () => {
  const addProduct = async (productData: any) => {
    try {
      const response = await axios.post("/api/v1/products", productData, {
        headers: { "Content-Type": "application/json" },
      });
      console.log(response.data);
    } catch (error) {
      console.error(`Error adding product ${error}`);
    }
  };

  const updateProduct = async (productData: any) => {
    try {
    } catch (error) {
      console.error(`Unable to update product ${error}`);
    }
  };

  const handleAddProduct = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const formValues = {
      name: formData.get("name"),
      description: formData.get("description"),
      price: formData.get("price"),
      quantity: formData.get("quantity"),
      category: formData.get("category"),
      image_url: formData.get("imageUrl"),
    };

    addProduct(formValues);
  };

  const handleUpdateProduct = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  const handleDeleteProduct = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
      <form onSubmit={handleUpdateProduct}></form>
      <h2>Delete Product</h2>
      <form onSubmit={handleDeleteProduct}></form>
    </div>
  );
};

export default AdminPage;
