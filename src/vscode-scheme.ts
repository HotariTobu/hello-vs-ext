import * as vscode from 'vscode';

export default (context: vscode.ExtensionContext) => {
    context.subscriptions.push(vscode.window.registerUriHandler({
        handleUri(uri) {
            vscode.window.showInformationMessage(uri.toString())
            vscode.window.showInformationMessage(JSON.stringify(uri.toJSON(), null, '    '))
            vscode.commands.executeCommand(uri.path.replace('/', ''), ...uri.query.split('&'))
        },
    }))

    context.subscriptions.push(vscode.commands.registerCommand('hello-vs-ext.redirect', async () => {
        const uri = 'vscode://hotari.hello-vs-ext/hello-vs-ext.echo?message=hello'
        vscode.env.openExternal(vscode.Uri.parse(uri))
    }))
}
