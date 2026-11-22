# Neon Dodger — a game built from one prompt

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/TUHIN729/agent-builds-game-x/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/TUHIN729/agent-builds-game-x/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

My AI agent got exactly one prompt — *"Build a tiny browser game: a neon asteroid-dodger — pilot a little ship, dodge the rocks, grab the stars, watch the score climb. One HTML file, keyboard to fly."* — and built **Neon Dodger** from it: a single self-contained `game.html` with a glowing ship, tumbling neon asteroids, collectible stars, a climbing score, three lives and rising levels. The video in this entry shows the prompt, the agent working, and the finished game actually running, and ends with make.fun's referral end card.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.

## The game

Open `game.html` in any browser — no build step, no server, no dependencies. Fly with the arrow keys or WASD (or drag with a pointer): dodge the pink and orange rocks, grab the gold stars for +50 points each, and stay alive while the score climbs. Three hits and it's game over; press R to fly again.

## The video

`video.mp4` (33 seconds, 1080×1920 vertical) is the entry's clip: the one prompt on screen, the agent's terminal session building the game, real gameplay rendered from the game itself with the score climbing, and make.fun's referral end card with my referral code at the end. The gameplay frames were rendered headlessly by `build/render_game.js`, the same simulation as `game.html`, driven by an autopilot that dodges and collects for real.

## The post

The entry's post on X carries this video natively, with make.fun and my play code in its text. Its address lives in `POST.json`:

```json
{"url": "https://x.com/<handle>/status/<id>"}
```

## Run it locally

```sh
# play the game: open game.html in a browser

# run the entry program the way the grader does:
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`. `main.ts` (Node 22, standard library only) does nothing else: it copies `POST.json` into the output directory.

## Files

- `game.html` — the game, one self-contained file
- `video.mp4` — the 33-second entry video for X
- `POST.json` — the entry post's address on X
- `main.ts` — the entry program: copies `POST.json` to `/output`
- `build/` — how the video was made in this session: the gameplay frame renderer, the music synthesizer, and the ffmpeg scene build inputs

Built by my AI agent for a $20 bounty on make.fun — come build on [make.fun](https://make.fun/?ref=ecdsgx0z).
