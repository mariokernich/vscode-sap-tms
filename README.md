# SAP TMS — SAP Trolling Message System 🎭🚀

> Because a workday without a cryptic message just isn't a real SAP day.

Welcome to the **SAP Trolling Message System** — the only VS Code extension officially guaranteed to give your editor more personality than your last 47 sprint plannings combined. 🧙‍♂️

Other extensions promise you productivity.
**SAP TMS** promises you truth. With emojis. 🌈

---

## 🤡 What does this extension do?

A lot. And at the same time, alarmingly little.

Every time VS Code starts, SAP TMS shows a **random joke** from a carefully hand-curated universe of wisdom — in **English or German**, depending on which language you happen to be suffering in today.

Topics include, but are not limited to:

- 🧱 SAP. A lot of SAP. Really. So much SAP.
- 🐞 Bugs that, according to the backend, don't exist
- 🧘‍♂️ UI5 as a spiritual experience
- 🔮 SAP error messages as modern oracles
- ☕️ The eternal search for the transaction that makes coffee
- 🦸‍♂️ UI5 developers as the unsung heroes of our time

---

## 🎯 Features

| Feature | Status |
|---|---|
| Random joke on startup | ✅ |
| English & German | ✅ |
| Auto-detect language from VS Code locale | ✅ |
| Command Palette integration (`SAP TMS: Show a random joke`) | ✅ |
| Makes you more productive | ❌ (never promised) |
| Fixes your OData service | ❌ (nobody does) |
| Explains why it's the backend's fault — again | ✅ (implicitly) |

---

## ⚙️ Configuration

Because we are a proper SAP-style tool, of course there is a setting. With **enum values**. As it should be.

```jsonc
{
  // "auto" | "de" | "en"
  "randomJoke.language": "auto"
}
```

- `auto` — we decide for you. Trust us. 🙏
- `de` — for authentic German suffering 🇩🇪
- `en` — for international suffering with style 🇬🇧

---

## 🚀 Developer setup

```bash
npm install
npm run compile
```

Then press **`F5`** and enjoy a fresh VS Code window where **all other extensions are disabled** — finally some peace from all those other "productive" tools.

---

## 🧠 How does it work, technically?

```
Array → Math.random() → showInformationMessage() → 🎉
```

That's it. No AI model. No OData call. No BAdI. No customizing.
Just honest, honest randomness. Much like the performance of your production system at month-end. 📉

---

## 🗂️ Project structure

- `src/extension.ts` — Activates the trolling on startup. Very short. Very effective.
- `src/jokes.ts` — The heart of the operation. This is where truth lives. In two languages.
- `package.json` — So that VS Code actually plays along.

---

## ❓ FAQ

**Q: Is this serious?**
A: As serious as every SAP roadmap of the last 10 years.

**Q: Why is it called SAP TMS and not "Joke Extension"?**
A: Because three letters generate more trust. This has been scientifically proven. By SAP, at least.

**Q: Does it conflict with the real SAP Transport Management System?**
A: Only in the minds of people who occasionally try to open the wrong TMS. 🤷‍♂️

**Q: Can I add my own jokes?**
A: Open `src/jokes.ts` → extend `jokesDe` or `jokesEn` → commit → present in the next stand-up → harvest applause. 🏆

**Q: Will this actually make me happy?**
A: No. But it makes the day more bearable. Which in SAP terms is roughly the same thing. ✨

---

## 🐛 Known "features"

- Sometimes the same joke shows up twice in a row. This is intentional. We call it **reproducibility** and it is enterprise-grade. 🏢
- There is no mute button. If you don't want jokes, uninstall the extension. Or go outside. We recommend the latter. 🌳
- The jokes are sometimes too accurate. We take no emotional responsibility for that. 💔

---

## 📜 License

Don't read it. Nobody reads licenses. But be kind to each other.

---

## 💌 Closing words

> "In SAP there are no problems, only features that need explanation." 📌📄

If this extension saves your day, spread the word.
If it doesn't — surely it's the backend's fault. 🧱➡️💥

Happy trolling! 🎭
