import { window, workspace, commands, Uri } from 'vscode';
import path from 'path';

export function activate(): void {
	commands.registerCommand('openFile', (passedPath: string) => {
		if (typeof passedPath !== 'string') {
			window.showWarningMessage('Path must be a string.');
			return;
		}
		if (passedPath.startsWith('.')) {
			if (workspace.workspaceFolders && workspace.workspaceFolders.length === 1) {
				const workspacePath = workspace.workspaceFolders[0].uri.fsPath;
				openFile(path.join(workspacePath, passedPath));
			}
		} else {
			openFile(passedPath);
		}
	});
}

function openFile(p: string): void {
	workspace.openTextDocument(Uri.file(p)).then(document => {
		window.showTextDocument(document);
	});
}

export function deactivate(): void {}
