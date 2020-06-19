import React from 'react';

// Shared components
import Container from '../../shared/Container';
import Header from '../../shared/Header';
import FloatingIcon from '../../shared/FloatingIcon';

class Create extends React.Component {
  render() {
    return (
      <div>
        <Header title="ShareBook" />
        <FloatingIcon icon="x" />
        <Container>
          <div>Form</div>
        </Container>
      </div>
    );
  }
}

export default Create;
