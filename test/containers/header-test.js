import React from "react";
import { expect } from "chai";
import { shallow, mount, render } from "enzyme";
import { Header } from "../../src/containers/header";
import wrapInTestContext from "../helpers/wrapInTestContext";
import GameData from "../helpers/getTestData";

describe("Header Component", function() {

  it("should render the logo", function() {
    const wrapper = shallow(<Header/>);
    
    expect(wrapper.find(".logo")).to.be.present;
  });
});