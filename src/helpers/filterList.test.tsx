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
