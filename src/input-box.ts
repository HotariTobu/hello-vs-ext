import * as vscode from 'vscode';

export default (context: vscode.ExtensionContext) => {
    context.subscriptions.push(vscode.commands.registerCommand('hello-vs-ext.input', async () => {
        const ignoreFocusOut = await vscode.window.showInformationMessage('ignore focus out?', 'Yes', 'No')
        const password = await vscode.window.showInformationMessage('password?', 'Yes', 'No')

        const value = await vscode.window.showInputBox({
            title: 'Title',
            ignoreFocusOut: ignoreFocusOut === 'Yes',
            password: password === 'Yes',
            placeHolder: 'placeholder',
            prompt: 'prompt',
            validateInput: value => {
                return value ? null : 'input!'
            },
            value: 'default value',
            valueSelection: [3, 6],
        })

        vscode.window.showInformationMessage(`Your input: ${value}`)
    }))
}
