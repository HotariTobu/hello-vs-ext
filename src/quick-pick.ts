import * as vscode from 'vscode';

export default (context: vscode.ExtensionContext) => {
    const items = Array(10).fill('').map((_, i) => `item ${i}`)

    context.subscriptions.push(vscode.commands.registerCommand('hello-vs-ext.pick', async () => {
        const ignoreFocusOut = await vscode.window.showInformationMessage('ignore focus out?', 'Yes', 'No')
        const matchOnDescription = await vscode.window.showInformationMessage('match on description?', 'Yes', 'No')
        const matchOnDetail = await vscode.window.showInformationMessage('match on detail?', 'Yes', 'No')
        const canPickMany = await vscode.window.showInformationMessage('can select many?', 'Yes', 'No')

        const pickedItems = await vscode.window.showQuickPick(items, {
            title: 'Title',
            ignoreFocusOut: ignoreFocusOut === 'Yes',
            onDidSelectItem: item => {
                console.log('toggle:', item)
            },
            matchOnDescription: matchOnDescription === 'Yes',
            matchOnDetail: matchOnDetail === 'Yes',
            placeHolder: 'placeholder',
            canPickMany: canPickMany === 'Yes',
        })

        vscode.window.showInformationMessage(`picked item(s): ${pickedItems}`)
    }))
}
