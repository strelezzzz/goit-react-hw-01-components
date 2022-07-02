import {Profile} from './Profile/Profile';
import profileData from './data/profileData'
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
        stats={stats} />
    </div>
  );
};
