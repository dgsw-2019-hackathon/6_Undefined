import { SERVER } from 'config/config.json';
import axios from 'axios';

class UserMoodBoardListRepository {
  async getUserMoodBoardList() {
    try {
      return await axios.get(`${SERVER}/api/profile/my_board`, {
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
