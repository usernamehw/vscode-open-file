import { window, workspace, commands, Uri } from 'vscode';

export function activate(): void {
	commands.registerCommand('openFile', (path: string) => {
		if (typeof path !== 'string') {
			return;
		}
		workspace.openTextDocument(Uri.file(path)).then(document => {
			window.showTextDocument(document);
		});
	});
}

export function deactivate(): void {}
