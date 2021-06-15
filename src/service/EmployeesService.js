const domain = "http://localhost:3001";

export const getEmployees = async () => {
  try {
    let response = await fetch(`${domain}/employees`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.log(error);
  }
};

export const createEmployees = async (data) => {
  try {
    let response = await fetch(`${domain}/employees`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.log(error);
  }
};

export const updateEmployees = async (data, id) => {
  console.log("dataa update", data);
  console.log("dataa update", id);
  try {
    let response = await fetch(`${domain}/employees/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let responseJson = await response.json();
    console.log("respon update data", responseJson);
    return responseJson;
  } catch (error) {
    console.log(error);
  }
};

export const deleteEmployees = async (id) => {
  console.log("dataa update", id);
  try {
    let response = await fetch(`${domain}/employees/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });
    let responseJson = await response.json();
    console.log("respon update data", responseJson);
    return responseJson;
  } catch (error) {
    console.log(error);
  }
};
