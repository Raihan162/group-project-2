import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types'
import { createStructuredSelector } from 'reselect';

const Home = ({ students }) => {

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getAllStudent())
  }, [dispatch]);

  return (
    <div className=''>
    </div>
  );
};

Home.propTypes = {

}

const mapStateToProps = createStructuredSelector({

})

export default connect(mapStateToProps)(Home);
