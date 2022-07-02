import { Profile } from './Profile/Profile';
import {Statistics} from './Statistics/Statistics'
import profileData from './data/profileData';
import statistics from './data/statistics.json';

const { username, tag, location, avatar, stats } = profileData;
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
        username={username}
        avatar={avatar}
        tag={tag}
        location={location}
        stats={stats}
      />
      <Statistics
        title={statistics.title}
        stats={statistics.stats}
      />
    </div>
  );
};
