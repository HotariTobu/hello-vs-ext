import * as vscode from 'vscode';

export default (context: vscode.ExtensionContext) => {
    const locations = Object.values(vscode.ProgressLocation).map(l => l.toString())

    context.subscriptions.push(vscode.commands.registerCommand('hello-vs-ext.progress', async () => {
        const location = (await vscode.window.showQuickPick(locations, {
            placeHolder: 'progress location',
            canPickMany: false
        }) ?? 'Notification') as keyof typeof vscode.ProgressLocation
        const cancellable = await vscode.window.showInformationMessage('can cancellable?', 'Yes', 'No')

        vscode.window.withProgress({
            title: 'Title',
            location: vscode.ProgressLocation[location],
            cancellable: cancellable === 'Yes',
        }, (progress, token) => new Promise<void>((resolve, reject) => {
            // token.onCancellationRequested(e => {
            //     console.log('task canceled:', e)
            // })

            console.log('task started')

            let count = 0

            const timerId = setInterval(() => {
                console.log('task progress')

                progress.report({
                    message: `I did it! ${count}`,
                    increment: 10,
                })
            }, 1000)

            setTimeout(() => {
                console.log('task complete')

                clearTimeout(timerId)
                resolve()
            }, 11000)

            // while (token.isCancellationRequested === false) {
            //     // console.log('count: ', count, 'token', token.isCancellationRequested)
            //     count++
            // }

            // console.log('clear timer')

            // clearTimeout(timerId)

            // vscode.window.showInformationMessage(`You did it! ${count}`)

            // reject('user canceled')
        }))
    }))
}
