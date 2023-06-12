import {clickAddCalc} from "./Todolist";

describe("Todolist", () => {
  it("can add items", () => {
    const newItems = clickAddCalc([], "buy milk")
    expect(newItems.todos).toEqual([{ completed: false, content: 'buy milk' }])
  });
});
// clicking remove
// clicking on item
// adding item
