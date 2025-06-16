/* eslint-disable no-undef */
const todoList = require("../todo");

let today = "";

let all, add, markAsComplete, overdue, dueToday, dueLater;
describe("TodoList test Suite", () => {
  beforeEach(() => {
    const todos = todoList();
    all = todos.all;
    add = todos.add;
    markAsComplete = todos.markAsComplete;
    overdue = todos.overdue;
    dueToday = todos.dueToday;
    dueLater = todos.dueLater;

    today = new Date().toISOString().split("T")[0];
    add({
      title: "Test todo",
      dueDate: new Date().toLocaleDateString("en-CA"),
      completed: false,
    });
  });

  test("checks creating a new todo", () => {
    const TodoItemCount = all.length;
    add({
      title: "Test todo",
      dueDate: new Date().toLocaleDateString("en-CA"),
      completed: false,
    });
    expect(all.length).toBe(TodoItemCount + 1);
  });

  test("checks marking a todo as completed.", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  test("checks retrieval of overdue items.", () => {
    const recived = overdue();

    const expected = all.filter((single) => single.dueDate < today);

    expect(recived).toEqual(expected);
  });

  test("checks retrieval of due today items.", () => {
    const recived = dueToday();
    const expected = all
      .filter((single) => single.dueDate === today)
      .map((single) => ({ ...single, dueDate: "" }));

    expect(recived).toEqual(expected);
  });

  test("checks retrieval of due later items.", () => {
    const recived = dueLater();
    const expected = all.filter((single) => single.dueDate > today);
    expect(recived).toEqual(expected);
  });
});
