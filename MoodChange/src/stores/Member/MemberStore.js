import { observable, action } from 'mobx';
import { autobind } from 'core-decorators';
import MemberRepository from './MemberRepository';

@autobind
class MemberStore {
  @observable info = [];

  @action async getMyInfo() {
    try {
      const data = await MemberRepository.getMyInfo();
      console.log(data.data.data);
      this.info = await data.data.data;
    } catch (err) {
      console.error(err);
    }
  }
}

export default MemberStore;
