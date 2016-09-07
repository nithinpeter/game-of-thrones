import React from "react";
import { expect } from "chai";
import { shallow, mount, render } from "enzyme";
import { Game } from "../../src/containers/game";
import { CharactersDropZone } from "../../src/containers/characters-drop-zone";
import { PickCharacters } from "../../src/containers/pick-characters";
import { ControlCenter } from "../../src/containers/control-center";
import wrapInTestContext from "../helpers/wrapInTestContext";
import GameData from "../helpers/getTestData";

describe("Game Component", function() {

  it("should render CharactersDropZone and PickCharacters Component", function() {
    const wrapper = shallow(<Game isFinished={false}/>);
    
    expect(wrapper.find(ControlCenter)).to.be.not.present;
    expect(wrapper.find(PickCharacters)).to.be.present;
    expect(wrapper.find(CharactersDropZone)).to.be.present;
  });

  it("should render ControlCenter Component if level is completed", function() {
    const wrapper = shallow(<Game isFinished={true}/>);
    
    expect(wrapper.find(ControlCenter)).to.be.present;
  });

});