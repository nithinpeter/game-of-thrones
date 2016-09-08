import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Character from '../../src/components/character';
import wrapInTestContext from '../helpers/wrapInTestContext'

describe("Character Component", function() {

  var CharacterComponent = wrapInTestContext(Character);

  it("should render name", function() {
    const wrapper = mount(<CharacterComponent name={"Nithin"} 
        isDropped={false} 
        isPrimary={false}/>);
    expect(wrapper.find(".name")).to.have.text("Nithin");
  });

  it("should not render if primary", function() {
    const wrapper = mount(<CharacterComponent 
        isPrimary={true} 
        isDropped={false}/>);
    expect(wrapper.find(".name")).to.be.not.present();
  });

  it("should not render if dropped", function() {
    const wrapper = mount(<CharacterComponent 
        isPrimary={false} 
        isDropped={true}/>);
    expect(wrapper.find(".name")).to.be.not.present();
  });
});


