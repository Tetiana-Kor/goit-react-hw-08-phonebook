import React from 'react';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '1024px',
    borderRadius: '10px',
    boxShadow:
      'inset -3px -3px 8px rgb(0 0 0 / 50%), inset 3px 3px 8px hsl(0deg 0% 100% / 90%), 3px 3px 8px -3px rgb(0 0 0 / 80%)',
  },
};

export default function HomeView() {
  return (
    <div style={styles.container}>
      <img
        style={styles.image}
        src="https://cdn.pixabay.com/photo/2015/05/28/10/31/hyacinth-787841_1280.jpg"
        alt="welcome page"
      />
      {/* <span role="img" aria-label="Иконка приветствия">
          💁‍♀️
        </span> */}
    </div>
  );
}
