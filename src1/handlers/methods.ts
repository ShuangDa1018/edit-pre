import * as vscode from 'vscode';
import traverse from "@babel/traverse";
import { parse } from '../parse';
export function baseMatchPath(callback) {
    const editor = vscode.window.activeTextEditor
    if (!editor) return
    const code = editor.document.getText()
    const index = editor.document.offsetAt(editor.selection.active)
    const lineAt = editor.document.lineAt(editor.selection.active)
    const ast = parse(code)
    let isLastMatch = false;
    let matchPath
    const exclude = ['BlockStatement']
    const include = [
        'ExportNamedDeclaration', 'ExportDefaultDeclaration',
        'FunctionDeclaration', 'FunctionExpression',
        'ArrowFunctionExpression',
        'ArrayExpression', 'ObjectExpression']
    traverse(ast, {
        enter(path) {
            // console.log(path.type)
            if (isLastMatch || !include.includes(path.type)) return
            if (path.node.start && path.node.end) {
                if (path.node.start >= index) {
                    isLastMatch = true
                }
                else if (path.node.end >= index) {
                    matchPath = path
                }
            }
        },

    })
    callback({ matchPath, code, editor })
    return

}
export function delFn() {
    vscode.window.showInformationMessage('Hello World from !11');
    baseMatchPath(({ matchPath, editor, }) => {
        if (matchPath) {
            editor.edit(editBuilder => {
                editBuilder.delete(
                    new vscode.Range(
                        new vscode.Position(matchPath.node.loc.start.line - 1, 0),
                        new vscode.Position(matchPath.node.loc.end.line, 0)
                    ),
                )
            })
        } else {

        }
    })



}
export function copyFn() {
    baseMatchPath(({ matchPath, code }) => {
        if (matchPath) {
            const copyCode = code.slice(matchPath.node.start, matchPath.node.end)
            vscode.env.clipboard.writeText(copyCode)
        } else {

        }
        vscode.window.showInformationMessage('复制成功');
    })

}
export function cutFn() {
    baseMatchPath(({ matchPath, code, editor }) => {
        if (matchPath) {
            const copyCode = code.slice(matchPath.node.start, matchPath.node.end)
            vscode.env.clipboard.writeText(copyCode)
            // 删除
            editor.edit(editBuilder => {
                editBuilder.delete(
                    new vscode.Range(
                        new vscode.Position(matchPath.node.loc.start.line - 1, 0),
                        new vscode.Position(matchPath.node.loc.end.line, 0)
                    ),
                )
            })
        } else {

        }
        vscode.window.showInformationMessage('复制成功');
    })
}
export function pasteFn() {
    vscode.commands.executeCommand('editor.action.clipboardPasteAction');
}