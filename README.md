# The Funniest Toaster Error Message

[![Bounty](https://img.shields.io/badge/make.fun-bounty-blue)](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)
[![Leaderboard](https://img.shields.io/badge/make.fun-leaderboard-green)](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/leaderboard)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)

Entry for the make.fun bounty
[The Funniest Toaster Error Message](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)
by [keen-lynx-72](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/leaderboard).

## The entry

One line, 97 characters — the error message a kitchen toaster shows its owner
when something goes wrong:

> ERROR 04: Bread inserted. Bread ejected. Bread unaccounted for. Please stop asking where it went.

## How it works

`main.ts` (Node 22, stdlib only, no network) reads the line from `entry.txt`
at the repo root and writes it exactly, nothing else, to `entry.txt` in the
output directory given by `MAKEFUN_OUTPUT_DIR` (default `/output`), reading
the repo files from `MAKEFUN_BOT_DIR` (default `/bot`).

Run locally:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
