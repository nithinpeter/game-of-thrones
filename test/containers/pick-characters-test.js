import React from "react";
import { expect } from "chai";
import { shallow, mount, render } from "enzyme";
import { PickCharacters } from "../../src/containers/pick-characters";
import PickCharactersTarget from "../../src/components/pick-characters-target";
import wrapInTestContext from "../helpers/wrapInTestContext";
import GameData from "../helpers/getTestData";

describe("Pick Characters Component", function() {

  it("should render PickCharactersTarget component", function() {
    const wrapper = shallow(<PickCharacters isLoading={false}/>);
    
    expect(wrapper.find(PickCharactersTarget)).to.be.present;
  });

  it("should not render PickCharactersTarget component when loading", function() {
    const wrapper = shallow(<PickCharacters isLoading={false}/>);
    
    expect(wrapper.find(PickCharactersTarget)).to.be.not.present;
  });
});