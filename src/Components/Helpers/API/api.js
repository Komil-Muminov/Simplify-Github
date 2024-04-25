import get from "./dom.js";
// json-server --watch db.json
// http://localhost:3000/data
// let response = await fetch(API, {
//   method: "POST",
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(newData),
// });

const API = "http://localhost:3000/data";

// Метод GET
async function getData() {
  try {
    let response = await fetch(API);
    let data = await response.json();
    get(data);
  } catch (error) {
    console.error(error);
  }
}

// Метод POST
async function postData(newData) {
  try {
    let response = await fetch(API, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    });
  } catch (error) {
    console.error(error);
  }
}

// Метод DELETE
async function deleteData(id) {
  try {
    let response = fetch(API + "/" + id, {
      method: "DELETE",
    });
    getData();
  } catch (error) {}
}

// Метод PUT - Complete
async function putComplete(mainData, newData) {
  try {
    let response = await fetch(API + "/" + mainData, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    });
    getData();
  } catch (error) {
    console.error(error);
  }
}

// Метод PUT - Edit
async function putEdit(mainData, newData) {
  try {
    let response = await fetch(API + "/" + mainData, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    });
    getData();
  } catch (error) {}
}

// Метод GET - Search
async function getSearch(search) {
  try {
    let response = await fetch(API + "?q=" + search.value);
    let data = await response.json();
    get(data);
  } catch (error) {
    console.error(error);
  }
}

export default getData;
export { postData, deleteData, putComplete, putEdit, getSearch };
