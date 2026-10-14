<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Site architecture
- Keep hospital services, about, updates, and contact as separate TanStack routes, with shared navigation in the root layout, so each page is directly reachable and indexable.
- Use the local hospital photos in public/images with Vite's BASE_URL so photos work on both Lovable and GitHub Pages.
- Never commit built output (index.html, page folders, assets/) at the repo root — TanStack Start reuses a root index.html as its prerender template, so a stale copy silently breaks later builds. The GitHub Pages site is built from source by the GitHub Actions workflow, which uploads .output/public.
