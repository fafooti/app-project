import { fetchService } from "./apiService";

export async function createProduct(input) {
  try {
    const output = await fetchService.post("product/createProduct", input);
  } catch (err) {
    return {
      status: 404,
      message: "Error in Create Product",
    };
  }
}

export async function readProduct(input) {
  try {
    const output = await fetchService.get("product/readProduct", input);
    return {
      status: output.status,
      message: "Read selected product",
      data: output.data,
    };
  } catch (err) {
    return {
      status: err.status,
      message: "Error in Read Product",
    };
  }
}

export async function deleteProduct(id) {
  try {
    const output = await fetchService.delete("category/deleteCategory", id);
    return {
      status: output.status,
      message: "deleted selected product",
      data: output.data,
    };
  } catch (err) {
    return {
      status: 404,
      message: "Error in Delete Product",
    };
  }
}
