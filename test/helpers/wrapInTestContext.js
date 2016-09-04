import React from 'react';
import TestBackend from 'react-dnd-test-backend';
import { DragDropContext } from 'react-dnd';

export default function wrapInTestContext(DecoratedComponent) {
  return DragDropContext(TestBackend)(
    React.createClass({
      render: function () {
        return <DecoratedComponent {...this.props} />;
      }
    })
  );
}