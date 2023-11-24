import React from 'react';
import { LeftOutlined } from '@ant-design/icons';
import { Button, Typography } from 'antd';
const { Text } = Typography;

function Header() {
  return (
    <div className="h-10 flex justify-between items-center text-center px-4 py-8">
      <div className="flex gap-2 items-center justify-center">
        <Button
          icon={<LeftOutlined />}
          style={{
            backgroundColor: 'lightgray',
          }}
        />
        <Text strong className="text-base">
          Basic Mathematics 101
        </Text>
      </div>
      <div>
        <span>Call teacher</span>
        <span>Support</span>
      </div>
    </div>
  );
}

export default Header;
