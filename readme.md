# 📄 Deploying Vite React App to GitHub Pages

This project is deployed to **GitHub Pages** using **Vite**. Follow these steps to **make changes, push updates, and deploy**.

---

## 🚀 1. Make Changes & Push to `main`

1. Make your changes in the **`main` branch**.
2. Push your changes to GitHub:
   ```sh
   git add .
   git commit -m "Updated project"
   git push origin main
   ```

---

## 🔹 2. Configure `vite.config.ts`

Ensure your `vite.config.ts` has the correct **`base`** path:

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/portfolio-test/', // Update this to match your repo name
});
```

> **Note:** Replace `portfolio-test` with your repository name.

---

## 🔹 3. Build the Project

Before deploying, generate the latest production build:

```sh
rm -rf dist  # Remove old build
npm run build  # Create new build in dist/
```

---

## 🔹 4. Deploy `dist/` to `gh-pages`

```sh
to create cname
 echo "test.scriptcrux.in" > dist/CNAME

```

You **do NOT** need to switch branches. Just run:

```sh
git add dist -f  # Force add dist/ since it's in .gitignore
git commit -m "Deploy latest build to GitHub Pages"
git subtree push --prefix dist origin gh-pages
```

```sh
to delete gh branch
$ git push origin `git subtree split --prefix dist main`:gh-pages --forc

```

This **pushes only the `dist/` folder** to the `gh-pages` branch.

---

## 🔹 5. If Push Fails (Fixing Remote Errors)

If you get an error like:

```sh
error: failed to push some refs to 'origin'
```

Force push the `dist/` folder with:

```sh
git push origin `git subtree split --prefix dist main`:gh-pages --force
```

This ensures the latest build is deployed.

---

## 🔹 6. Verify Deployment

1. Open **https://scriptcrux.github.io/portfolio-test/**
2. If changes don’t appear, **clear cache**:
   - **Mac:** `Cmd + Shift + R`
   - **Windows:** `Ctrl + Shift + R`
3. Check if assets load correctly in the **Network tab (`F12` → Network).**

---

## 🛠 Troubleshooting

| Issue                         | Solution                                                                        |
| ----------------------------- | ------------------------------------------------------------------------------- |
| 404 errors on assets (JS/CSS) | Ensure `vite.config.ts` has `base: '/portfolio-test/'`                          |
| `gh-pages` missing `assets/`  | Run `git subtree push --prefix dist origin gh-pages`                            |
| Git rejects push              | Use `git push origin \`git subtree split --prefix dist main\`:gh-pages --force` |
| Site not updating             | Try `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)                             |

---

## 📝 Notes

- The `gh-pages` branch is **only for deployment**.
- Keep working in `main`, then deploy when ready.
- Always **run `npm run build` before deploying** to get the latest changes.

---

## ✅ You're Ready to Deploy!

Now, whenever you make updates:

1. Commit & push changes to `main`
2. Run `npm run build`
3. Deploy using `git subtree push --prefix dist origin gh-pages`

🚀 Happy coding! 🎉
