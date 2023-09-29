import { useLocation } from 'react-router-dom';
import {TopMenu, FooterSection} from '../../allPagesPaths';

function Hide({ children }) {
  const location = useLocation();
  const hideHeaderAndFooterForPaths = [
    '/checkout/information',
    '/checkout/shipping',
    '/order-confirmed'
  ];

  return (
    <div>
      {!hideHeaderAndFooterForPaths.includes(location.pathname) && <TopMenu />}

      {children}

      {!hideHeaderAndFooterForPaths.includes(location.pathname) && <FooterSection />}
    </div>
  );
}


export default Hide;