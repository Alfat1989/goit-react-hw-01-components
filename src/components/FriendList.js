import PropTypes from 'prop-types'

export default function FriendList({ friends }) {
    return (
        <ul class="friend-list">
            {friends.map(friend => (
                <li class="item" key={friend.id}>
                    <span class="status"></span>
                    <img class="avatar" src={friend.avatar} alt={friend.name} width="48" />
                    <p class="name">{friend.name}</p>
                </li>
            ))}
        </ul>
    )
}

FriendList.ProtoTypes={
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired
    }))
}