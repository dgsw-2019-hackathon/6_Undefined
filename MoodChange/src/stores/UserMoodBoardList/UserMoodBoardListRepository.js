import { SERVER } from 'config/config.json';
import axios from 'axios';

class UserMoodBoardListRepository {
  async getMyInfo() {
    try {
      return await axios.get(`${SERVER}/members/my`, {
        headers: {
          'x-access-token': localStorage.getItem('token')
        }
      });
    } catch (err) {
      console.error(err);
    }
  }
}

export default new UserMoodBoardListRepository();
