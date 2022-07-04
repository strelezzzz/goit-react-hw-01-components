import { Profile } from './Profile/Profile';
import {Statistics} from './Statistics/Statistics'
import profileData from './data/profileData';
import statistics from './data/statistics.json';

const { username, tag, location, avatar, stats } = profileData;
export const App = () => {
  return (
    <div >
      <Profile
        username={username}
        avatar={avatar}
        tag={tag}
        location={location}
        stats={stats}
      />
      <Statistics
        title="Upload stats"
        stats={statistics}
      />
    </div>
  );
};
