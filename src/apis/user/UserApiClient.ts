
import BaseApiClient from "../BaseApiClient";
import IUserDto from "./IUserDto";

class UserApiClient extends BaseApiClient {

  async getById(id: number): Promise<IUserDto> {
    const res = await this.client.get(`/users/${id}`);
    return res.data;
  }
}

export default UserApiClient;