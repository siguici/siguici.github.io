# 🧑‍💻 Crafting Tomorrow's Solutions, Today

[Sigui](https://sigui.deno.dev), invites you to delve into the world of open-source development. Join the journey, explore projects, and be part of the collaborative spirit that defines [Sigui's open-source contributions](https://github.com/siguici).


## 🎉 How to Use [This Site](https://siguici.github.io)

1. 🌐 **Navigate Between Projects:** Access [the documentation](https://siguici.github.io) at https://siguici.github.io to discover the projects.

2. 🔍️ **Search:** Use the search function to find specific terms throughout [the documentation](https://siguici.github.io).

3. 👥 **Contribute:** If you'd like to improve [the documentation](https://siguici.github.io) for a project, please refer to the [Contributions](#contributions) section below.

## 👏 Contributions

Contributions to [the documentation](https://siguici.github.io) are welcome! If you find errors, missing information, or want to add additional details, please follow these steps:

1. Fork the project.
2. Create a new branch (`git checkout -b improvements/documentation`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Improving documentation'`).
5. Push to the branch (`git push origin improvements/documentation`).
6. Open a Pull Request.

## 🚀 Project Structure

Inside of your Astro + Starlight project, you'll see the following folders and files:

```plain
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   │   └── config.ts
│   └── env.d.ts
├── astro.config.ts
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `bun install`             | Installs dependencies                            |
| `bun run dev`             | Starts local dev server at `localhost:4321`      |
| `bun run build`           | Build your production site to `./dist/`          |
| `bun run preview`         | Preview your build locally, before deploying     |
| `bun run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun run astro -- --help` | Get help using the Astro CLI                     |

## License

This documentation website is licensed under the [MIT License](./LICENSE.md) - see the [LICENSE file](./LICENSE.md) for more details.
