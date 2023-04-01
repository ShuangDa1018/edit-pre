import { parse } from '@babel/parser'
import traverse from '@babel/traverse'
import type { NodePath } from "@babel/traverse";
import { FunctionDeclaration, ArrowFunctionExpression } from "@babel/types";
interface functionNode {
	name: string;
	start: {
		line: number;
		column: number;
		index: number;
	};
	end: {
		line: number;
		column: number;
		index: number;
	};
}
export function getFunctionNode(code: string, index: number): functionNode | undefined {

	const ast = parse(code)
	let functionNode
	// traverse(ast, {
		// FunctionDeclaration(path: NodePath<FunctionDeclaration>) {
		// 	if (!path.node.loc) return
		// 	const start = path.node.loc.start
		// 	const end = path.node.loc.end
		// 	if (index >= start.line && index <= end.line)
		// 		functionNode = {
		// 			name: path.node.id&&path.node.id.name,
		// 			start,
		// 			end,
		// 		}
		// },
		// ArrowFunctionExpression(path: NodePath<ArrowFunctionExpression>) {

		// }
	// })
	return functionNode
}