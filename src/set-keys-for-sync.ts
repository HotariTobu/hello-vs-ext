import * as vscode from 'vscode';

export default (context: vscode.ExtensionContext) => {
    // on activate
    const versionKey = 'shown.version';
    context.globalState.setKeysForSync([versionKey]);

    context.globalState.update(versionKey, context.extension.packageJSON.version)

    context.subscriptions.push(vscode.commands.registerCommand('hello-vs-ext.setKeysForSync', () => {
        // later on show page
        const lastVersion = context.globalState.get<string>(versionKey);
        if (typeof lastVersion === 'undefined') {
            vscode.window.showWarningMessage('undefined: version')
            return
        }

        const currentVersion = context.extension.packageJSON.version;
        if (lastVersion < currentVersion) {
            vscode.window.showInformationMessage('update!', lastVersion, '->', currentVersion)
            context.globalState.update(versionKey, currentVersion);
        }
        else {
            vscode.window.showInformationMessage('version:', currentVersion)
        }
    }))
}
