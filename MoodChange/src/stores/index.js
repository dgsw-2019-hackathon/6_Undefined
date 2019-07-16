import Member from './Member';
import MoodBoardList from './MoodBoardList';
import UserMoodBoardList from './UserMoodBoardList';

const stores = {
  MemberStore: new Member(),
  MoodBoardListStore: new MoodBoardList(),
  UserMoodBoardListStore: new UserMoodBoardList(),
};

export default stores;
