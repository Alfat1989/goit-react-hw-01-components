import PropTypes from 'prop-types'

export default function Profile({ avatar, tag, username, location, followers, views, likes }) {
  return (
<div class="profile">
  <div class="description">
    <img
      src={avatar}
      alt="User avatar"
      class="avatar"
    />
    <p class="name">{username}</p>
    <p class="tag">@{tag}</p>
    <p class="location">{location}</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers </span>
      <span class="quantity">{followers}</span>
    </li>
    <li>
      <span class="label">Views </span>
      <span class="quantity">{views}</span>
    </li>
    <li>
      <span class="label">Likes </span>
      <span class="quantity">{likes}</span>
    </li>
  </ul>
</div>)
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  views:PropTypes.number.isRequired,
}