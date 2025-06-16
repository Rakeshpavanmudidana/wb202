/* eslint-disable no-undef */
const todoList = require("../todo");

const {
  all,
  add,
  markAsComplete,
  // overdue,
  // dueToday,
  // dueLater,
  // toDisplayableList,
} = todoList();

describe("TodoList test Suite", () => {
  beforeAll(() => {
    add({
      title: "Test todo",
      dueDate: new Date().toLocaleDateString("en-CA"),
      completed: false,
    });
  });

  test("Should add new todo", () => {
    const TodoItemCount = all.length;
    add({
      title: "Test todo",
      dueDate: new Date().toLocaleDateString("en-CA"),
      completed: false,
    });
    expect(all.length).toBe(TodoItemCount + 1);
  });

  test("Should mark todo as complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });
});
