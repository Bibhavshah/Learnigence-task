import React from 'react';
import {
  WechatOutlined,
  ShareAltOutlined,
  CameraOutlined,
  PhoneFilled,
  ExclamationOutlined,
} from '@ant-design/icons';

const options = [
  {
    name: 'Cam',
    icon: <CameraOutlined />,
  },
  {
    name: 'Mic',
    icon: <PhoneFilled />,
  },
  {
    name: 'Share',
    icon: <ShareAltOutlined />,
  },
  {
    name: 'Chat',
    icon: <WechatOutlined />,
  },
  {
    name: 'Exit',
    icon: <ExclamationOutlined />,
  },
];

function BodyOptions() {
  return (
    <div className="w-full ">
      <div className="flex flex-col justify-center gap-5">
        <img
          src="https://i.ibb.co/0jZzQYH/Group-1.png"
          alt="Group-1"
          className="w-1/2 ml-14"
        />
        <img
          src="https://i.ibb.co/0jZzQYH/Group-1.png"
          alt="Group-1"
          className="w-1/2 ml-14"
        />
      </div>
      <div className="mt-10 w-full flex justify-start items-center gap-4 flex-wrap">
        {options.map((option) => (
          <div
            key={option.name}
            className="flex flex-col justify-center items-center gap-2"
          >
            <div className="flex justify-center items-center bg-gray-200 rounded-full w-20 h-10">
              {option.icon}
            </div>
            <span>{option.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BodyOptions;
