import axios from "axios";

class Service {
  private API_URL = "https://randomuser.me/api/";

  fetchUsers = async (page: number = 1) => {
    try {
      const request = await axios.get(
        `${this.API_URL}?page=${page}&results=10&seed=370c89b702a62156`
      );
      return request.data;
    } catch (e) {
      throw e;
    }
  };
}

export const UsersService = new Service();
