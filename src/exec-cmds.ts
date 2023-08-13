import * as vscode from 'vscode';

export default (context: vscode.ExtensionContext) => {
    context.subscriptions.push(vscode.commands.registerCommand('hello-vs-ext.execBuiltIn', async () => {
        vscode.commands.executeCommand('workbench.action.terminal.toggleTerminal')
    }))

    context.subscriptions.push(vscode.commands.registerCommand('hello-vs-ext.execThirdParty', async () => {
        vscode.commands.executeCommand('opensshremotes.openConfigFile')
    }))

    context.subscriptions.push(vscode.commands.registerCommand('hello-vs-ext.execSecondParty', async () => {
        vscode.commands.executeCommand('hello-vs-ext.echo', 0 ,null, 'arg')
    }))

    context.subscriptions.push(vscode.commands.registerCommand('hello-vs-ext.echo', async (...args) => {
        console.log(...args)
    }))
}
