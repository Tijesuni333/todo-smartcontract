import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("To do", function () {
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

  describe("toggling todo item", function () {
    it("Should be able to toogle todo item boolean state", async function () {
      const { todo } = await loadFixture(deployTodoList);

      const toggle = await todo.toggleTodoItem("iscompleted")

      expect(toggle).to.equal("iscompleted");
      });
    });

    describe("update todo item", function () {
      it("Should be able to update todo item", async function () {
        const { todo } = await loadFixture(deployTodoList);
  
        const update = await todo.updateTodoItem( 3,"cleaning","the house");
  
        expect(update).to.equal("cleaning","the house");
        });
      });

      describe("delete todo item", function () {
        it("Should be able to delete todo item", async function () {
          const { todo } = await loadFixture(deployTodoList);
    
          const deleteItem = await todo.deleteTodoItem(0);
    
          expect(deleteItem).to.equal(0);
          });
        });


      describe("get todo item", function () {
        it("Should be able to get todo item", async function () {
          const { todo } = await loadFixture(deployTodoList);
    
          const getItem = await todo.getTodoItem(1);
    
          expect(getItem).to.equal(1);
          });
        });
});





 
      