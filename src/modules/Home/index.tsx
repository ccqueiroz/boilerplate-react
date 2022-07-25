import React from 'react';
import { connect } from 'react-redux';
import { RootStore } from '../../config/store/store';

const Home: React.FC = () => {
  return (
    <>
      <h1>Home</h1>
    </>
  );
};

const mapState = (state: RootStore) => state;
export default connect(mapState)(Home);
