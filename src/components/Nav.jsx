import React, { useState } from 'react';
import { LaptopOutlined } from '@ant-design/icons';
import { Segmented, Space } from 'antd';

function Nav() {
  const [options, setOptions] = useState([
    {
      label: (
        <div className="h-15 flex justify-center items-center mx-10 gap-2">
          <LaptopOutlined />
          <p>Classroom </p>
        </div>
      ),
      value: 'classroom',
    },
    {
      label: (
        <div className="w-1/8 flex justify-center items-center mx-10 gap-2">
          <LaptopOutlined />
          <p>Whiteboard </p>
        </div>
      ),
      value: 'whiteboard',
    },
    {
      label: (
        <div className="w-1/8 flex justify-center items-center mx-10 gap-2">
          <LaptopOutlined />
          <p>Videos </p>
        </div>
      ),
      value: 'videos',
    },
    {
      label: (
        <div className="w-1/8 flex justify-center items-center mx-10 gap-2">
          <LaptopOutlined />
          <p>Slide Show </p>
        </div>
      ),
      value: 'slideshow',
    },
    {
      label: (
        <div className="w-1/8 flex justify-center items-center mx-10 gap-2">
          <LaptopOutlined />
          <p>Documents </p>
        </div>
      ),
      value: 'documents',
    },
    {
      label: (
        <div className="w-1/8 flex justify-center items-center mx-10 gap-2">
          <LaptopOutlined />
          <p>Doc.cam</p>
        </div>
      ),
      value: 'doccam',
    },
  ]);

  const customStyle = {
    width: '80vw',
    height: '10vh',
    padding: '1rem 5rem',
  };
  return (
    <div className='ml-16'>
      <Segmented options={options} style={customStyle} />
    </div>
  );
}

export default Nav;
