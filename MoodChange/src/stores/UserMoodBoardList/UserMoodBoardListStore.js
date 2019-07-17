import { observable, action } from 'mobx';
import { autobind } from 'core-decorators';
import UserMoodBoardListRepository from './UserMoodBoardListRepository';

@autobind
class UserMoodBoardListStore {
  @observable UserMoodBoardList = [];

  @action async getUserMoodBoardList() {
    try {
      const data = await UserMoodBoardListRepository.getUserMoodBoardList();
      console.log(data);
      this.UserMoodBoardList = await data.data.result;
    } catch (err) {
      console.error(err);
    }
  }
}

export default UserMoodBoardListStore;
