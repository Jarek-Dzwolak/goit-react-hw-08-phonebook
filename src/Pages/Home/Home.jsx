import React from 'react';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

const Home = () => (
  <div class="image-container">
    <img src="src/img/img.jpg" alt="Mężczyzna rozmawiający przez komórkę" />
  </div>
);

export default Home;
