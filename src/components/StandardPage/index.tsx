import React from 'react';
import { Outlet } from 'react-router-dom';

import stylesTheme from 'styles/Theme.module.scss';
import Header from 'components/Header';

export default function StandardPage({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className={stylesTheme.container}>
        <Outlet />
        {children}
      </div>
    </>
  );
}
