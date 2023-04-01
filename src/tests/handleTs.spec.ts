import { describe, it, expect } from "vitest";
import { getDeleteFunctionNodeJs } from "../handlers/handleJs";
describe("handle ts", () => {
  it("should cv-delete-s at index Position", () => {
    let index = 20;

    const code = `
    function getName ():string {
        return 'name'
    }
    `;

    const node = getDeleteFunctionNodeJs(index, code);

    expect(node).toEqual({
      name: "getName",
      start: {
        line: 2,
        column: 4,
        index: 5,
      },
      end: {
        line: 4,
        column: 5,
        index: 61,
      },
    });
  });
});
