// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import formatLogs from "./commands/formatLogs";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  const disposable = vscode.commands.registerCommand("laravel-log-viewer.formatLogs", () => formatLogs(context));

  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
