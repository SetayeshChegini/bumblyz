# BUMBLYZ repository workflow

This repository is the source of truth for `SetayeshChegini/bumblyz`.

For every requested website change:

1. Inspect the existing implementation before editing.
2. Make the focused change and fix related issues caused by it.
3. Verify desktop and mobile layouts, including widths near 375px, 390px, and 430px.
4. Run the available lint, typecheck, tests, and production build; fix failures.
5. Commit the completed work and publish it to `main` without asking for routine approval.
6. Confirm the GitHub Pages workflow succeeds and verify the newest version at `https://setayeshchegini.github.io/bumblyz/`.

Prefer direct updates to `main` when allowed. If a branch or pull request is required, merge the completed work into `main` when permissions allow. Do not leave finished work on an unmerged branch.

Preserve existing branding, routes, animations, content, and working functionality unless the request directly requires a change. Use minimal, established dependencies. Resolve routine merge conflicts safely by preserving both working functionality and the newest requested change.

Never force-push, rewrite history, expose secrets, commit environment files, delete unrelated files, modify another repository, or perform destructive work outside this project.

Final handoff should state what changed, what was tested, whether the build passed, the commit, confirmation that the finished change is on `main`, the GitHub Pages deployment status, and the live URL.
