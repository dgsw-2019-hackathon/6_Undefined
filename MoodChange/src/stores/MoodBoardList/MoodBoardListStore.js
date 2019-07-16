import { observable, action } from 'mobx';
import { autobind } from 'core-decorators';
import MoodBoardListRepository from './MoodBoardListRepository';

@autobind
class MoodBoardListStore {
  @observable info = [];

  @action async getMyInfo() {
    try {
      const data = await MoodBoardListRepository.getMyInfo();
      console.log(data.data.data);
      this.info = await data.data.data;
    } catch (err) {
      console.error(err);
    }
  }
}

export default MoodBoardListStore;
