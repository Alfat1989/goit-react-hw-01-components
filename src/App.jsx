import Profile from './components/Profile'
import Statistics from 'components/Statistics'
import data from './statistics/data.json'
import user from './profile/user.json'
import FriendList from 'components/FriendList'
import friends from './friend-list/friends.json'


export default function App() {
    return (
        <div>
          <Profile
            avatar={user.avatar}
            location={user.location}
            tag={user.tag}
            username={user.username}
            followers={user.stats.followers}
            views={user.stats.views}
            likes={user.stats.likes}
            />

            <Statistics
                stats={data}              
            /> 

            <FriendList
            friends={friends}
            />
        </div>
    )
}