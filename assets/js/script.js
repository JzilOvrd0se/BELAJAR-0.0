//musik
const audio = document.getElementById("bg-music");
const playBtn = document.getElementById("play-btn");
const volumeSlider = document.getElementById("volume-slider");

audio.volume = 0.5;

playBtn.addEventListener
("click", () =>
{
    if (audio.paused)
    {
        audio.play();
        playBtn.textContent = "Pause Music";
    }
    
    else
    {
        audio.pause();
        playBtn.textContent = "Play Music";
    }
}
);

volumeSlider.addEventListener
("input", (e) =>
{
    audio.volume = e.target.value;
}
);

//ketikan otomatis
const texts =
[
    "Hello world!",
    "Hi, I'm Jzil.",
    "My hobby is playing rhythm games.",
    "My favorite game right now is osu!.",
    "I'm 4K / 7K osu!mania player.",
    "Nice to meet you."
];

let textIndex = 0;
let charIndex = 0;

const typewriterEl = document.getElementById("typewriter");

function
typeEffect()
{
    //method
    if (textIndex >= texts.length) return;

    const currentText = texts[textIndex];

    //tambah huruf 1 1
    typewriterEl.innerHTML += currentText.charAt(charIndex);
    charIndex++;

    let speed = 100;

    if (charIndex === currentText.length)
    {
        typewriterEl.innerHTML += "<br>";
        textIndex++;
        charIndex = 0;
        speed = 500;
    }
    setTimeout(typeEffect, speed);
}
typeEffect();

//stat osu
const statsBox = document.getElementById("osu-stats");

const playerInfo =
{
    username: "JzilOvrd0se",
    mode: "osu!mania (4K / 7K)",
    statusList:
    [
        "Train Stamina"
    ]
};

let currentStatus = 0;

function
renderPlayerCard()
{
    statsBox.innerHTML =
    `
        <p>Player: <strong>${playerInfo.username}</strong></p>
        <p>Mode: <strong>${playerInfo.mode}</strong></p>
        <p>Status: <strong>${playerInfo.statusList[currentStatus]}</strong></p>
    `;
}
renderPlayerCard();

//tombol salin dc
const copyBtn = document.getElementById("copy-discord");

copyBtn.addEventListener
("click", () =>
{
    const username = copyBtn.getAttribute("data-username");
    navigator.clipboard.writeText(username).then
    (() =>
    {
        const originalText = copyBtn.textContent;
        copyBtn.textContent = "Copied: " + username + "!";
        setTimeout(() =>
        {
            copyBtn.textContent = originalText;
        },
        2000);
    }
    );
}
);

//efek kursor
document.addEventListener
("mousemove", (e) =>
{
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");
    sparkle.style.left = e.clientX + "px";
    sparkle.style.top = e.clientY + "px";
    document.body.appendChild(sparkle);

    setTimeout
    (() =>
    {
        sparkle.remove();
    },
    800);
}
);