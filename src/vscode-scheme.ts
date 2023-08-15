import * as vscode from 'vscode';

export default (context: vscode.ExtensionContext) => {
    context.subscriptions.push(vscode.window.registerUriHandler({
        handleUri(uri) {
            vscode.commands.executeCommand(uri.path, ...uri.query.split('&'))
        },
    }))

    context.subscriptions.push(vscode.commands.registerCommand('hello-vs-ext.redirect', async () => {
        const uri = 'vscode://hotari.hello-vs-ext/echo?message=hello'
        vscode.env.openExternal(vscode.Uri.parse(uri))
    }))
}
