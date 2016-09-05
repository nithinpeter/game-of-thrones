import React from "react";
import { expect } from "chai";
import { shallow, mount, render } from "enzyme";
import PickCharactersTarget from "../../src/components/pick-characters-target";
import Character from "../../src/components/character";
import wrapInTestContext from "../helpers/wrapInTestContext";
import GameData from "../helpers/getTestData";

describe("Pick Characters Target Component", function() {

  var PickCharactersTargetComponent = wrapInTestContext(PickCharactersTarget);

  it("should render all characters", function() {
    const wrapper = mount(<PickCharactersTargetComponent gameData={GameData.characterTree}/>);
    expect(wrapper.find(Character)).to.have.length(6);
  });
});
