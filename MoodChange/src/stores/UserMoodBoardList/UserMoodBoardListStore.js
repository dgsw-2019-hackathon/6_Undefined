import { observable, action } from 'mobx';
import { autobind } from 'core-decorators';
import UserMoodBoardListRepository from './UserMoodBoardListRepository';

@autobind
class UserMoodBoardListStore {
  @observable info = [];

  @action async getMyInfo() {
    try {
      const data = await UserMoodBoardListRepository.getMyInfo();
      console.log(data.data.data);
      this.info = await data.data.data;
    } catch (err) {
      console.error(err);
    }
  }
}

export default UserMoodBoardListStore;
