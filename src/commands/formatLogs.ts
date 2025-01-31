import * as vscode from "vscode";
import { setUpPanel } from "../lib/webviewHelper";

export default async function handle(context: vscode.ExtensionContext) {
  const editor = vscode.window.activeTextEditor;

  if (!editor) {
    vscode.window.showErrorMessage("Please open a .log file.");
    return;
  }

  const document = editor.document;

  if (document.languageId !== "log") {
    vscode.window.showErrorMessage("This extension works with log files only.");
    return;
  }

  setUpPanel(context, "Log to Table - " + document.fileName, () => getLogContent(editor));
}

function getLogContent(editor: vscode.TextEditor): string {
  if (!editor || editor.document.languageId !== "log") {
    vscode.window.showErrorMessage("Please open a .log file.");
    return "";
  }

  return editor.document.getText();
}
