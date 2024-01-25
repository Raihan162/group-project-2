import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import { ping } from '@containers/App/actions';
import AllStudent from '@components/AllStudent';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ping());
  }, [dispatch]);

  return (
    <div>
      <AllStudent />
      {/* <FormattedMessage id="app_greeting" /> */}
    </div>
  );
};

export default Home;
