// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
let vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('toPDF.hello', function () {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('hello from toPDF!');
	});

	let convert = vscode.commands.registerCommand('toPDF.convert', function () {
		let docType = vscode.window.activeTextEditor;
		let langId = docType.document.languageId;

		switch (langId) {
			case 'plaintext':
				break;
			case 'html':
				break;
			case 'css':
				break;
			case 'javascript':
				break;
			case 'javascript':
				break;

			default:
				break;
		}

		vscode.window.showInformationMessage(langId);
	});

	let barItem = vscode.window.createStatusBarItem('right', 100);
	barItem.text = "$(file-pdf)";
	barItem.tooltip = "convert to pdf";
	barItem.command = "toPDF.convert";
	barItem.show();

	context.subscriptions.push(disposable);
	context.subscriptions.push(convert);
	context.subscriptions.push(barItem);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}
exports.deactivate = deactivate;