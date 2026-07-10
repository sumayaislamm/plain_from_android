const layouts = {
  1: [5],
  2: [1,9],
  3: [1,5,9],
  4: [1,3,7,9],
  5: [1,3,5,7,9],
  6: [1,3,4,6,7,9]
};

const palettes = [
  { bg: '#1B1B2F', accent: '#F4D35E' },
  { bg: '#2B1B2F', accent: '#EE6C4D' },
  { bg: '#12261E', accent: '#3DDC97' },
  { bg: '#1A1A2E', accent: '#5FB4F0' },
  { bg: '#2E1A1A', accent: '#F27059' },
  { bg: '#1E1B2E', accent: '#C77DFF' }
];

const facts = [
  "A day on Venus is longer than its year.",
  "Octopuses have three hearts, and two stop beating when they swim.",
  "Honey never spoils. Archaeologists have eaten 3,000-year-old honey.",
  "There are more possible chess games than atoms in the observable universe.",
  "Bananas are berries. Strawberries are not.",
  "The Eiffel Tower grows about 6 inches taller in summer heat.",
  "A group of flamingos is called a 'flamboyance'.",
  "Sharks existed before trees.",
  "Wombat droppings are cube-shaped.",
  "The shortest war in history lasted 38 minutes.",
  "Hot water can freeze faster than cold water under the right conditions.",
  "Your stomach gets an entirely new lining every few days.",
  "A single cloud can weigh more than a million pounds.",
  "Scotland's national animal is the unicorn.",
  "There's a species of jellyfish that is biologically immortal.",
  "The inventor of the Pringles can is buried in one.",
  "Antarctica is technically the world's largest desert.",
  "Cows have best friends and get stressed when separated.",
  "The Great Wall of China is not visible from space with the naked eye.",
  "Butterflies taste with their feet."
];

const die = document.getElementById('die');
const factNum = document.getElementById('fact-number');
const factText = document.getElementById('fact');
const pips = document.querySelectorAll('.pip');

function setPips(n) {
  pips.forEach(p => p.classList.remove('on'));
  layouts[n].forEach(pos => {
    document.querySelector(`.pip[data-pip="${pos}"]`).classList.add('on');
  });
}

function roll() {
  die.classList.add('rolling');
  const n = Math.floor(Math.random() * 6) + 1;
  const palette = palettes[Math.floor(Math.random() * palettes.length)];
  const fact = facts[Math.floor(Math.random() * facts.length)];

  document.documentElement.style.setProperty('--bg', palette.bg);
  document.documentElement.style.setProperty('--accent', palette.accent);
  document.body.style.background = palette.bg;
  die.style.background = palette.accent;

  setTimeout(() => {
    setPips(n);
    factNum.textContent = `ROLLED ${n}`;
    factText.textContent = fact;
    die.classList.remove('rolling');
  }, 250);
}

die.addEventListener('click', roll);
setPips(1);