import {clickAddCalc, clickItemCalc, clickRemoveCalc} from "./Todolist";

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
  it("complete an item by clicking on it", () => {
    const initialItems = clickAddCalc([], "buy milk")
    const newItems = clickItemCalc(initialItems.todos, 0)
    expect(newItems[0].completed).toEqual(true);
  });
});
