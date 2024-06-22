import { fetchService } from "./apiService";

export async function createCategory(Input) {
  try {
    const output = await fetchService.post("Category/createCategory", Input);
    return {
      status: output.status,
      message: "Created",
      date: output.data,
    };
  } catch (err) {
    return {
      status: 404,
      message: "Error in Create Category",
    };
  }
}

export async function readCategory(input) {
  try {
    const output = await fetchService.post("Category/readCategory", input);
    return {
      status: output.status,
      message: "Read selected categories",
      data: output.data,
    };
  } catch (err) {}
}

export async function deleteCategory(id) {
  try {
    const output = await fetchService.delete("Category/deleteCategory", { id });
  } catch (err) {
    return {
      status: 404,
      message: "Error in Delete Category",
    };
  }
}
