import { yellowCheck } from "./yellowCheck";

const candidateWord1 = ["a", "b", "c", "d", "e"];
const candidateWord2 = ["s", "m", "a", "r", "t"];
const candidateWord3 = ["r", "a", "l", "l", "y"];

const queryChars1 = [
  { char: "C", status: 1 },
  { char: "L", status: 1 },
  { char: "O", status: 1 },
  { char: "U", status: 1 },
  { char: "D", status: 1 },
];

test("CLOUD, no yellows", () => {
  expect(yellowCheck(queryChars1, candidateWord1)).toEqual(true);
  expect(yellowCheck(queryChars1, candidateWord2)).toEqual(true);
  expect(yellowCheck(queryChars1, candidateWord3)).toEqual(true);
});

const queryChars2 = [
  { char: "C", status: 2 },
  { char: "L", status: 1 },
  { char: "O", status: 1 },
  { char: "U", status: 1 },
  { char: "D", status: 1 },
];

test("CLOUD, C", () => {
  expect(yellowCheck(queryChars2, candidateWord1)).toEqual(true);
  expect(yellowCheck(queryChars2, candidateWord2)).toEqual(false);
  expect(yellowCheck(queryChars2, candidateWord3)).toEqual(false);
});

const candidateWord4 = ["l", "o", "s", "e", "r"];
const queryChars3 = [
  { char: "C", status: 1 },
  { char: "L", status: 2 },
  { char: "O", status: 1 },
  { char: "U", status: 1 },
  { char: "D", status: 1 },
];

test("CLOUD, L", () => {
  expect(yellowCheck(queryChars3, candidateWord1)).toEqual(false);
  expect(yellowCheck(queryChars3, candidateWord2)).toEqual(false);
  expect(yellowCheck(queryChars3, candidateWord3)).toEqual(false);
  expect(yellowCheck(queryChars3, candidateWord4)).toEqual(true);
});

const queryChars4 = [
  { char: "C", status: 1 },
  { char: "L", status: 2 },
  { char: "O", status: 1 },
  { char: "U", status: 1 },
  { char: "D", status: 1 },
];

test("CLOUD, L, O", () => {
  expect(yellowCheck(queryChars4, candidateWord1)).toEqual(false);
  expect(yellowCheck(queryChars4, candidateWord2)).toEqual(false);
  expect(yellowCheck(queryChars4, candidateWord3)).toEqual(false);
  expect(yellowCheck(queryChars4, candidateWord4)).toEqual(true);
});

const queryChars5 = [
  { char: "X", status: 2 },
  { char: "O", status: 1 },
  { char: "O", status: 1 },
  { char: "O", status: 1 },
  { char: "O", status: 1 },
];
test("Correctly queries one yellow", () => {
  expect(yellowCheck(queryChars5, ["o", "o", "o", "o", "o"])).toEqual(false);
  expect(yellowCheck(queryChars5, ["x", "o", "o", "o", "o"])).toEqual(false);
  expect(yellowCheck(queryChars5, ["o", "x", "o", "o", "o"])).toEqual(true);
  expect(yellowCheck(queryChars5, ["o", "o", "x", "o", "o"])).toEqual(true);
  expect(yellowCheck(queryChars5, ["o", "o", "o", "x", "o"])).toEqual(true);
  expect(yellowCheck(queryChars5, ["o", "o", "o", "o", "x"])).toEqual(true);
});

const queryChars6 = [
  { char: "O", status: 1 },
  { char: "O", status: 1 },
  { char: "X", status: 2 },
  { char: "X", status: 2 },
  { char: "O", status: 1 },
];
test("Correctly queries two yellows", () => {
  expect(yellowCheck(queryChars6, ["o", "o", "o", "o", "o"])).toEqual(false);
  expect(yellowCheck(queryChars6, ["x", "o", "o", "o", "o"])).toEqual(false);
  expect(yellowCheck(queryChars6, ["x", "x", "o", "o", "o"])).toEqual(true);
  expect(yellowCheck(queryChars6, ["o", "x", "x", "o", "o"])).toEqual(false);
  expect(yellowCheck(queryChars6, ["o", "o", "x", "x", "o"])).toEqual(false);
  expect(yellowCheck(queryChars6, ["o", "o", "o", "x", "x"])).toEqual(false);
  expect(yellowCheck(queryChars6, ["o", "o", "o", "o", "x"])).toEqual(false);
});

const queryChars7 = [
  { char: "Y", status: 2 },
  { char: "O", status: 1 },
  { char: "X", status: 2 },
  { char: "O", status: 1 },
  { char: "O", status: 1 },
];
test("Correctly queries two different yellows", () => {
  expect(yellowCheck(queryChars7, ["o", "o", "o", "o", "o"])).toEqual(false);
  expect(yellowCheck(queryChars7, ["x", "o", "o", "o", "o"])).toEqual(false);
  expect(yellowCheck(queryChars7, ["o", "x", "o", "o", "o"])).toEqual(false);
  expect(yellowCheck(queryChars7, ["x", "y", "o", "o", "o"])).toEqual(true);
  expect(yellowCheck(queryChars7, ["o", "o", "y", "x", "o"])).toEqual(true);
  expect(yellowCheck(queryChars7, ["o", "o", "o", "y", "x"])).toEqual(true);
  expect(yellowCheck(queryChars7, ["o", "o", "o", "o", "y"])).toEqual(false);
});
