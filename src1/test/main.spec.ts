import { test, expect } from 'vitest'
import { getFunctionNode } from '../main'
test('init', () => {
    const code = `
		function getNameBBBB() {
			return 'printTips'
		  }
		function getName() {
			return 'getName'
		  }
		`
    const index = 0
    const functionNode = getFunctionNode(code, index)
    expect(functionNode).toEqual({
        name: "getName",
        start: { line: 2, column: 2, index: 3 },
        end: { line: 4, column: 5, index: 53 }
    })
})