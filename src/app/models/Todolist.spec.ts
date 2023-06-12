import {clickAddCalc, clickRemoveCalc} from "./Todolist";

describe("With a Todolist, you can", () => {
  it("add an items by clicking Add with a text", () => {
    const newItems = clickAddCalc([], "buy milk")
    expect(newItems.todos).toEqual([{ completed: false, content: 'buy milk' }])
  });
  it("remove an item by clicking Remove", () => {
    const initialItems = clickAddCalc([], "buy milk")
    const newItems = clickRemoveCalc(initialItems.todos, 0)
    expect(newItems.length).toEqual(0);
  });
});
// clicking on item
