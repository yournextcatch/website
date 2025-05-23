import sendRequest from "../send-request";
const BASE_URL = "/api/hotbites";

export async function getAllHotBites() {
  return sendRequest(`${BASE_URL}/`);
}

export async function createHotBite(biteData) {
  return sendRequest(`${BASE_URL}/`, "POST", biteData);
}

export async function updateBite(id, biteData) {
  return sendRequest(`${BASE_URL}/${id}`, "PUT", biteData);
}

export async function deleteBite(id) {
  return sendRequest(`${BASE_URL}/${id}`, "DELETE");
}
