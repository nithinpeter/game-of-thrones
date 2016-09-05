import React from "react";
import { expect } from "chai";
import { shallow, mount, render } from "enzyme";
import CharacterHolder from "../../src/components/character-holder";
import wrapInTestContext from "../helpers/wrapInTestContext";
import GameData from "../helpers/getTestData";

describe("Character Holder Component", function() {

  var CharacterHolderComponent = wrapInTestContext(CharacterHolder);

  it("should render primary character", function() {
    const wrapper = mount(<CharacterHolderComponent isPrimary={true} id={1} gameData={GameData.characterTree} index={0} total={1}/>);
    expect(wrapper.find(".name")).to.have.text("Arya Stark");
  });

  it("should should not render other characters on initial load", function() {
    const wrapper = mount(<CharacterHolderComponent isPrimary={false} id={2} gameData={GameData.characterTree} index={0} total={1}/>);
    expect(wrapper.find(".name")).be.not.present();
  });

  it("should display green tick if correct character is dropped", function() {
    const wrapper = mount(<CharacterHolderComponent isPrimary={false} id={2} droppedItemId={2} gameData={GameData.characterTree} index={0} total={1}/>);
    expect(wrapper.find(".fa-check .success")).be.present();
  });

  it("should display red cross if correct character is dropped", function() {
    const wrapper = mount(<CharacterHolderComponent isPrimary={false} id={2} droppedItemId={0} gameData={GameData.characterTree} index={0} total={1}/>);
    expect(wrapper.find(".fa-close .error")).be.present();
  });

});
