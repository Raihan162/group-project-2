import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import AllStudent from '@components/AllStudent';
import { getAllStudent } from './actions';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(ping());
    dispatch(getAllStudent())
  }, [dispatch]);

  return (
    <div>
      <AllStudent />
      {/* <FormattedMessage id="app_greeting" /> */}
    </div>
  );
};

export default Home;
