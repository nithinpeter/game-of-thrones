import React from "react";
import { expect } from "chai";
import { shallow, mount, render } from "enzyme";
import App from "../../src/containers/app";
import Game from "../../src/containers/game";
import Header from "../../src/containers/header";
import wrapInTestContext from "../helpers/wrapInTestContext";
import GameData from "../helpers/getTestData";

describe("App Component", function() {

  it("should render Game and Header Component", function() {
    const wrapper = shallow(<App/>);
    
    expect(wrapper.find(Header)).to.be.present;
    expect(wrapper.find(Game)).to.be.present;
  });
});