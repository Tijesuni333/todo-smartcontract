import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("To do", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployTodoList() {
    const ToDo = await ethers.getContractFactory("ToDo");
    const todo = await ToDo.deploy();

    return { todo };

  }

  describe("creating todo", function () {
    it("Should be able create the todo list", async function () {
      const { todo } = await loadFixture(deployTodoList);

      const todoList =await todo.createTodo("teejay","a boy")
      
      expect(todoList).to.equal("teejay","a boy");
    });
  });
});

    describe("toggling todo item", function () {
      it("Should be able to toogle todo item boolean state", async function () {
        const { todo } = await loadFixture(deployTodoList);

        const toggle = await todo.toggleTodoItem("iscompleted")

        expect(toggle).to.equal("iscompleted");
      });
    });

      