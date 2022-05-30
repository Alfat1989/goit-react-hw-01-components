import Profile from './components/Profile'
import Statistics from 'components/Statistics'
import data from './statistics/data.json'
import user from './profile/user.json'
import FriendList from 'components/FriendList'
import friends from './friend-list/friends.json'
import TransactionHistory from 'components/TransactionHistory'
import transaction from './transaction-history/transaction.json'
import Selection from 'components/Section'


export default function App() {
    return (
        <div>
            <Selection title='Профиль'>
                <Profile
                avatar={user.avatar}
                location={user.location}
                tag={user.tag}
                username={user.username}
                followers={user.stats.followers}
                views={user.stats.views}
                likes={user.stats.likes}
                />
            </Selection>

            <Selection title='Статистика'>
                <Statistics
                stats={data}              
                /> 
            </Selection>
            
            <Selection title='Список друзей'>
                <FriendList
                friends={friends}
                />
            </Selection>
            
            <Selection title='Список транзакций'>
                <TransactionHistory
                items={transaction}
                />
            </Selection>
            
        </div>
    )
}