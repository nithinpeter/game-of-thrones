import React from "react";
import { expect } from "chai";
import { shallow, mount, render } from "enzyme";
import CharacterConnector from "../../src/components/character-connector";
import wrapInTestContext from "../helpers/wrapInTestContext";


describe("Character Connector Component", function() {

  var CharacterConnectorComponent = wrapInTestContext(CharacterConnector);

  it("should render relationship", function() {
    expect(mount(<CharacterConnectorComponent relationship={{ type: "father" }} index={0} total={1}/>).contains("FATHER")).to.equal(true);
  });
});
