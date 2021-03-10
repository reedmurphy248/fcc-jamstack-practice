
const vibes = [
    "... you are awesome!",
    "... have a wonderful day!",
    "... you got this!"
];

const vibe = vibes[Math.floor(Math.random() * vibes.length)];

document.querySelector(".vibe").append(vibe);