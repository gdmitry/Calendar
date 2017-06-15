// Link.react-test.js
import React from 'react';
import Link from '../components/ViewControls';
import renderer from 'react-test-renderer';

console.log("fsdfsf");

test('ViewControls should call changeView callback', () => {
  function updateViewType() {
	
  }
  const component = renderer.create(
    <ViewControls viewId={1} setView={updateViewType}/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseLeave();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});