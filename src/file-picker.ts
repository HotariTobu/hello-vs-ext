import * as vscode from 'vscode';

export default (context: vscode.ExtensionContext) => {
    context.subscriptions.push(vscode.commands.registerCommand('hello-vs-ext.pickFile', async () => {
        const defaultUri = await vscode.window.showInputBox({
            placeHolder: 'default uri',
            value: '~',
        })

        const canSelectFiles = await vscode.window.showInformationMessage('can select files?', 'Yes', 'No')
        const canSelectFolders = await vscode.window.showInformationMessage('can select folders?', 'Yes', 'No')
        const canSelectMany = await vscode.window.showInformationMessage('can select many?', 'Yes', 'No')

        const uris = await vscode.window.showOpenDialog({
            title: 'The title',
            defaultUri: defaultUri ? vscode.Uri.file(defaultUri) : undefined,
            openLabel: 'open label',
            filters: {
                'Images': ['png', 'jpg'],
                'TypeScript': ['ts', 'tsx'],
                'Any': ['*'],
            },
            canSelectFiles: canSelectFiles === 'Yes',
            canSelectFolders: canSelectFolders === 'Yes',
            canSelectMany: canSelectMany === 'Yes',
        })

        console.log(uris)
    }))
}
