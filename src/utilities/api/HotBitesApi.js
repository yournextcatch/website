import sendRequest from "../send-request";
const BASE_URL = "/api/hotbites";

export async function getAllHotBites() {
  return sendRequest(`${BASE_URL}/`);
}
