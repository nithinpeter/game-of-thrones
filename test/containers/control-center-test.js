import React from "react";
import { expect } from "chai";
import { shallow, mount, render } from "enzyme";
import { ControlCenter } from "../../src/containers/control-center";
import wrapInTestContext from "../helpers/wrapInTestContext";
import GameData from "../helpers/getTestData";

describe("Control Center Component", function() {

  it("should render the text 'Start Playing' on first level", function() {
    const wrapper = shallow(<ControlCenter currentLevel={1} isFinished={true}/>);
    
    expect(wrapper.find(".header")).to.have.text("Start Playing");
  });

  it("should render the text 'Play Next Level!' on all other levels but not the last level", function() {
    const wrapper = shallow(<ControlCenter currentLevel={2} isFinished={true}/>);
    
    expect(wrapper.find(".header")).to.have.text("Play Next Level!");
  });

  it("should render the text 'Congrats! You Won!' on last level", function() {
    const wrapper = shallow(<ControlCenter currentLevel={3} isFinished={true}/>);
    
    expect(wrapper.find(".header")).to.have.text("Congrats! You Won!");
  });
});