import React from "react";
import { expect } from "chai";
import { shallow, mount, render } from "enzyme";
import { CharactersDropZoneComponent } from "../../src/containers/characters-drop-zone";
import CharacterHolder from "../../src/components/character-holder";
import wrapInTestContext from "../helpers/wrapInTestContext";
import GameData from "../helpers/getTestData";

describe("Characters Drop Zone Component", function() {

  it("should render all character holders", function() {
    const wrapper = mount(<CharactersDropZoneComponent isLoading={false} isFinished={false} gameData={GameData.characterTree}/>);
    expect(wrapper.find(CharacterHolder)).to.have.length(6);
  });
});
