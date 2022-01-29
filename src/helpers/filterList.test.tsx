import { filterList } from "./filterList";
import { libraryArr } from "./libTestArr";

const queryChars1 = [
  { char: "A", status: 1 },
  { char: "B", status: 1 },
  { char: "O", status: 1 },
  { char: "D", status: 1 },
  { char: "E", status: 1 },
];
test("ABODE all grey", () => {
  expect(filterList(libraryArr, queryChars1)).toEqual(["smith", "wrung"]);
});

const queryChars2 = [
  { char: "B", status: 2 },
  { char: "A", status: 2 },
  { char: "E", status: 2 },
  { char: "O", status: 2 },
  { char: "D", status: 2 },
];
test("ABODE one yellow", () => {
  expect(filterList(libraryArr, queryChars2)).toEqual(["abode"]);
});
