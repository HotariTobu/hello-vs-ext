import * as vscode from 'vscode';

export default (context: vscode.ExtensionContext) => {
    context.subscriptions.push(vscode.commands.registerCommand('hello-vs-ext.getConfig', async () => {
        const config = vscode.workspace.getConfiguration()
        const value = config.get<boolean>('hello-vs-ext.booleanProperty')
        console.log(config, value)
    }))

    context.subscriptions.push(vscode.commands.registerCommand('hello-vs-ext.setConfig', async () => {
        const value = await vscode.window.showInformationMessage('value?', 'True', 'false')
        const target = await vscode.window.showQuickPick([
            { label: 'User', description: 'User Settings', target: vscode.ConfigurationTarget.Global },
            { label: 'Workspace', description: 'Workspace Settings', target: vscode.ConfigurationTarget.Workspace }
        ], {
            placeHolder: 'config target'
        });

        const config = vscode.workspace.getConfiguration()
        config.update('hello-vs-ext.booleanProperty', value === 'True', target?.target)
    }))
}
