'use client';

import { ConfigProvider, theme } from 'antd';
import { ReactNode } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          fontFamily: 'var(--font-sans), Manrope, sans-serif',
          colorPrimary: '#d8bc85',
          colorLink: '#d8bc85',
          colorBgBase: '#090d14',
          colorBgContainer: '#111824',
          colorTextBase: '#f6f1e5',
          colorTextSecondary: '#c7bead',
          colorBorder: 'rgba(216, 188, 133, 0.28)',
          borderRadius: 14,
          borderRadiusLG: 18,
          boxShadowSecondary: '0 20px 45px rgba(3, 6, 12, 0.45)'
        },
        components: {
          Layout: {
            headerBg: 'transparent',
            bodyBg: 'transparent',
            footerBg: 'transparent'
          },
          Menu: {
            darkItemBg: 'transparent',
            darkSubMenuItemBg: 'transparent',
            darkItemColor: '#c8c2b3',
            darkItemHoverColor: '#f5ebd3',
            darkItemSelectedColor: '#f5ebd3',
            darkItemSelectedBg: 'rgba(216, 188, 133, 0.14)'
          },
          Card: {
            colorBgContainer: 'rgba(13, 18, 28, 0.78)',
            headerBg: 'transparent',
            colorBorderSecondary: 'rgba(216, 188, 133, 0.22)'
          },
          Button: {
            borderRadius: 999,
            primaryShadow: 'none',
            defaultShadow: 'none'
          },
          Input: {
            activeBorderColor: '#d8bc85',
            hoverBorderColor: '#e2c998'
          },
          Tag: {
            defaultBg: 'rgba(216, 188, 133, 0.1)',
            defaultColor: '#ece4d1'
          }
        }
      }}
    >
      {children}
    </ConfigProvider>
  );
}
