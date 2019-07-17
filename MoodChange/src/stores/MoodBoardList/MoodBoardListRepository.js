import { SERVER } from 'config/config.json';
import axios from 'axios';

class MoodBoardListRepository {
  async getMoodBoardList() {
    try {
      return await axios.post(`${SERVER}/api/mood_board/board`, {
        headers: {
          'x-access-token': localStorage.getItem('token')
        }
      });
    } catch (err) {
      console.error(err);
    }
  }
}

export default new MoodBoardListRepository();
