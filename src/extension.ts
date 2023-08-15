// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

import setKeysForSync from './set-keys-for-sync';
import displayNotifications from './display-notifications';
import quickPick from './quick-pick';
import inputBox from './input-box';
import filePicker from './file-picker';
import outputChannel from './output-channel';
import progress from './progress';
import getConfig from './get-config';
import execCmds from './exec-cmds';
import vscodeScheme from './vscode-scheme';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "hello-vs-ext" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('hello-vs-ext.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		// vscode.window.showInformationMessage('Hello World from Hello-VS-Ext!');
		vscode.window.showInformationMessage('Hello World from extension.ts in Hello-VS-Ext!');
	});

	context.subscriptions.push(disposable);

	context.subscriptions.push(vscode.commands.registerCommand('hello-vs-ext.otherCommand', async () => {
		const item = await vscode.window.showInformationMessage('List items here:', ...[
			'item1', 'item2', 'item3',
		])
		console.log('selected item:', item)
	}));

	setKeysForSync(context)
	displayNotifications(context)
	inputBox(context)
	quickPick(context)
	filePicker(context)
	outputChannel(context)
	progress(context)

	getConfig(context)
	execCmds(context)

	vscodeScheme(context)
}

// This method is called when your extension is deactivated
export function deactivate() {}
