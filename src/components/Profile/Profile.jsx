import { PropTypes } from "prop-types";
import css from './Profile.module.css'
export const Profile = ({ username, tag, location, avatar, stats }) => {
    return <div className={css.profile}>
                <div class="description">
                    <img
                                src={avatar}
                                alt="User avatar"
                                className={css.avatar}
                    />
                    <p class="name">{username}</p>
                    <p class="tag">@{tag}</p>
                    <p class="location">{location}</p>
                </div>

                <ul class="stats">
                    <li>
                    <span class="label">Followers</span>
                    <span class="quantity">{stats.followers}</span>
                    </li>
                    <li>
                    <span class="label">Views</span>
                    <span class="quantity">{stats.views}</span>
                    </li>
                    <li>
                    <span class="label">Likes</span>
                    <span class="quantity">{stats.likes}</span>
                    </li>
                </ul>
            </div>

}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }),
}