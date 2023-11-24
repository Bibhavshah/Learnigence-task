import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import userAvatar from '../assets/userAvatar.jpg';

const icons = [
  {
    name: 'Profile',
    icon: <UserOutlined />,
  },
  {
    name: 'Profile',
    icon: <UserOutlined />,
  },
  {
    name: 'Profile',
    icon: <UserOutlined />,
  },
  {
    name: 'Profile',
    icon: <UserOutlined />,
  },
  {
    name: 'Profile',
    icon: <UserOutlined />,
  },
  {
    name: 'Profile',
    icon: <UserOutlined />,
  },
  {
    name: 'Profile',
    icon: <UserOutlined />,
  },
  {
    name: 'Profile',
    icon: <UserOutlined />,
  },
];

function Sidebar() {
  return (
    <div className="flex flex-col bg-slate-200 p-4 h-full w-1/12">
      <div className="mb-6">
        {icons.map((icon) => (
          <div className="flex items-center my-10" key={icon.name}>
            <div className="mr-4">{icon.icon}</div>
            <div>{icon.name}</div>
          </div>
        ))}
      </div>

      <div>
        <img
          src={userAvatar}
          alt="User Avatar"
          className="w-20 h-20 rounded-full mb-2"
        />
      </div>
    </div>
  );
}

export default Sidebar;
