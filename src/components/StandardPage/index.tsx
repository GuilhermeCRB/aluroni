import { Outlet } from 'react-router-dom';
import Header from 'components/Header';

export default function StandardPage() {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
    </>
  );
}
