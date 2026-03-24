'use client';

import { ConfigProvider, theme } from 'antd';
import { ReactNode } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: '#ffffff',
          colorBgBase: '#000000',
          colorTextBase: '#ffffff',
          colorBorder: '#2A2A2A',
          borderRadius: 10
        }
      }}
    >
      {children}
    </ConfigProvider>
  );
}
