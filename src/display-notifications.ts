import * as vscode from 'vscode';

export default (context: vscode.ExtensionContext) => {
    context.subscriptions.push(vscode.commands.registerCommand('hello-vs-ext.info', () => {
        vscode.window.showInformationMessage('The information', 'option1', 'option2')
    }))

    context.subscriptions.push(vscode.commands.registerCommand('hello-vs-ext.warn', () => {
        vscode.window.showWarningMessage('The waring', 'option1', 'option2')
    }))

    context.subscriptions.push(vscode.commands.registerCommand('hello-vs-ext.error', () => {
        vscode.window.showErrorMessage('The error', 'option1', 'option2')
    }))
}
