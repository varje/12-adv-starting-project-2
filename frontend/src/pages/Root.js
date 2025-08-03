import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
import EventsNavigation from '../components/EventsNavigation';

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <EventsNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;