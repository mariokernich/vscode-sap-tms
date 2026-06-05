import * as vscode from "vscode";
import { getJokes, JokeLanguage } from "./jokes";

function resolveLanguage(): JokeLanguage {
    const configured = vscode.workspace
        .getConfiguration("randomJoke")
        .get<string>("language", "auto");

    if (configured === "de" || configured === "en") {
        return configured;
    }

    // auto: derive from VS Code locale
    const locale = vscode.env.language?.toLowerCase() ?? "en";
    return locale.startsWith("de") ? "de" : "en";
}

function getRandomJoke(): string {
    const language = resolveLanguage();
    const jokes = getJokes(language);
    const index = Math.floor(Math.random() * jokes.length);
    return jokes[index];
}

export function activate(context: vscode.ExtensionContext) {
    // Show a random joke on startup
    vscode.window.showInformationMessage(`😂 ${getRandomJoke()}`);

    // Also register a command to show a joke on demand
    const disposable = vscode.commands.registerCommand(
        "randomJoke.showJoke",
        () => {
            vscode.window.showInformationMessage(`😂 ${getRandomJoke()}`);
        },
    );

    context.subscriptions.push(disposable);
}

export function deactivate() {}
