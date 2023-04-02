import * as vscode from 'vscode';
import { copyFn, cutFn, pasteFn, delFn } from './handlers/methods';
export function activate(context: vscode.ExtensionContext) {
	const copy = "edit-pre.copy-s";
	const paste = "edit-pre.paste-s";
	const cut = "edit-pre.cut-s";
	const del = "edit-pre.delete-s";
	const copyDisposable = vscode.commands.registerCommand(copy, () => {
		try {
			copyFn();
		} catch (e) {
			console.log(e);
		}
	});
	const pasteDisposable = vscode.commands.registerCommand(paste, () => {
		pasteFn();
	});
	const cutDisposable = vscode.commands.registerCommand(cut, () => {
		cutFn();
	});
	const delDisposable = vscode.commands.registerCommand(del, () => {
		delFn();
	});
	console.log(copyDisposable, pasteDisposable, cutDisposable, delDisposable);

	context.subscriptions.push(copyDisposable, pasteDisposable, cutDisposable, delDisposable);
}


export function deactivate() { }
