import React from "react";
import { expect } from "chai";
import { shallow, mount, render } from "enzyme";
import CharacterConnector from "../../src/components/character-connector";
import wrapInTestContext from "../helpers/wrapInTestContext";

describe("Character Connector Component", function() {

  it("should render relationship", function() {
    const wrapper = shallow(<CharacterConnector relationship={{ type: "father" }} index={0} total={1}/>);
    expect(wrapper).to.have.text("FATHER");
  });
});
