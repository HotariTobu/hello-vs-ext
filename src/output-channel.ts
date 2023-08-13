import * as vscode from 'vscode';

export default (context: vscode.ExtensionContext) => {
    const items = Array(10).fill('').map((_, i) => `item ${i}`)

    context.subscriptions.push(vscode.commands.registerCommand('hello-vs-ext.output', async () => {
        const channel = vscode.window.createOutputChannel('hoge', 'Swift')

        const focus = await vscode.window.showInformationMessage('focus?', 'Yes', 'No')
        channel.show(focus === 'Yes')

        await vscode.window.showInformationMessage('append!', 'ok')
        items.forEach(v => {
            channel.append(v)
        })

        await vscode.window.showInformationMessage('append line!', 'ok')
        items.forEach(v => {
            channel.appendLine(v)
        })

        await vscode.window.showInformationMessage('replace!', 'ok')
        channel.replace('replacement')

        await vscode.window.showInformationMessage('clear!', 'ok')
        channel.clear()

        await vscode.window.showInformationMessage('hide!', 'ok')
        channel.hide()

        items.forEach(v => {
            channel.appendLine(v)
        })

        await vscode.window.showInformationMessage('dispose!', 'ok')
        channel.show()

        await new Promise(resolve => setTimeout(resolve, 1000))

        channel.dispose()
    }))
}
