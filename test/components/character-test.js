import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Character from '../../src/components/character';
import wrapInTestContext from '../helpers/wrapInTestContext'

describe("Character Component", function() {

  var CharacterComponent = wrapInTestContext(Character);

  it("should render name", function() {
    expect(mount(<CharacterComponent name={"Nithin"} isDropped={false} isPrimary={false}/>).contains(<span className="name">Nithin</span>)).to.equal(true);
  });

  it("should not render if primary", function() {
    expect(shallow(<CharacterComponent isPrimary={true} isDropped={false}/>).contains(<span className="name">Nithin</span>)).to.equal(false);
  });

  it("should not render if dropped", function() {
    expect(mount(<CharacterComponent isPrimary={false} isDropped={true}/>).contains(<span className="name">Nithin</span>)).to.equal(false);
  });
});
