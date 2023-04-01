import * as vscode from 'vscode';
import { getFunctionNode } from './main';

export function activate(context: vscode.ExtensionContext) {
	const commandId = "cv-delete-s.deleteFunction";
	const disposable = vscode.commands.registerCommand(commandId, () => {
		try {
			deleteFunction();
		} catch (e) {
			console.log(e);

		}
	});

	context.subscriptions.push(disposable);
}



const deleteFunction = () => {
	vscode.window.showInformationMessage('Hello World from !11');
	const editor = vscode.window.activeTextEditor;

	if (!editor) return

	const code = editor.document.getText()
	const index = editor.document.offsetAt(editor.selection.active)
	console.log(index);

	const functionNode = getFunctionNode(code, index)

	if (!functionNode) return

	editor.edit(editBuilder => {
		editBuilder.delete(
			new vscode.Range(
				new vscode.Position(functionNode.start.line, functionNode.start.column),
				new vscode.Position(functionNode.start.line, functionNode.start.column)
			),
		)
	})
}

export function deactivate() { }
