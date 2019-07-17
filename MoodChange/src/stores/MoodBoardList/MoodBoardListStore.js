import { observable, action } from 'mobx';
import { autobind } from 'core-decorators';
import MoodBoardListRepository from './MoodBoardListRepository';

@autobind
class MoodBoardListStore {
  @observable MoodBoardList = [];

  @action async getMoodBoardList() {
    try {
      const data = await MoodBoardListRepository.getMoodBoardList();
      console.log(data);
      this.MoodBoardList = await data.data.result;
    } catch (err) {
      console.error(err);
    }
  }
}

export default MoodBoardListStore;
