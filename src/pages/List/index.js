import React from 'react';
import PropTypes from 'prop-types';

// Shared components
import Container from '../../shared/Container';
import Header from '../../shared/Header';
import FloatingIcon from '../../shared/FloatingIcon';

import './List.css';

const List = ({ shareBooks }) => {
  return (
    <div className="App">
      <Header title="ShareBook" />
      <FloatingIcon icon="+" />
      <Container>
        <div>
          {shareBooks.length &&
            shareBooks.map((book) => <div>{book.author}</div>)}
        </div>
      </Container>
    </div>
  );
};

List.propTypes = {
  shareBooks: PropTypes.array,
};

export default List;
