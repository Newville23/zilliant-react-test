import React from 'react'
import PropTypes from 'prop-types'
import { Drawer, List, ListItem, Avatar, FontIcon } from 'react-md'

const Sidebar = ({ user }) => {
  return user ? (
    <Drawer
      className='sidebar'
      type={Drawer.DrawerTypes.PERSISTENT}
      visible
      onMediaTypeChange={() => {}}
      onVisibilityChange={() => {}}
    >
      <List>
        <ListItem
          leftAvatar={<Avatar icon={<FontIcon>favorite</FontIcon>} />}
          primaryText='Following'
          secondaryText={user.following}
        />
        <ListItem
          leftAvatar={<Avatar icon={<FontIcon>group</FontIcon>} />}
          primaryText='Followers'
          secondaryText={user.followers}
        />
        <ListItem
          leftAvatar={<Avatar icon={<FontIcon>folder_special</FontIcon>} />}
          primaryText='Public Repos'
          secondaryText={user.public_repos}
        />
        <ListItem
          leftAvatar={<Avatar icon={<FontIcon>local_activity</FontIcon>} />}
          primaryText='Public Gists'
          secondaryText={user.public_gists}
        />
      </List>
    </Drawer>
  ) : null
};

Sidebar.propTypes = {
  user: PropTypes.object
}

export default Sidebar
