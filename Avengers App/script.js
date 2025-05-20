// Hero Card Bio's
const bios = [
  {
    name: "Thor",
    color: "red",
    bio: `🔨 Full Name: Thor Odinson
🌍 Place of Birth: Asgard
⚡ Alignment: Good
🌩️ Race: Asgardian
👨 Gender: Male

📊 Power Stats --->
💡 Intelligence: 69%
💪 Strength: 100%
⚡ Speed: 92%
💯 Durability: 100%
🔋 Power: 100%
🥋 Combat: 85%`
  },
  {
    name: "Iron Man",
    color: "yellow",
    bio: `🤖 Full Name: Tony Stark
🌍 Place of Birth: Long Island, New York
⚙️ Alignment: Good
🧬 Race: Human
👨 Gender: Male

📊 Power Stats --->
💡 Intelligence: 100%
💪 Strength: 85%
⚡ Speed: 75%
💯 Durability: 85%
🔋 Power: 100%
🥋 Combat: 64%`
  },
  {
    name: "Hulk",
    color: "green",
    bio: `🟢 Full Name: Bruce Banner
🌍 Place of Birth: Dayton, Ohio
⚛️ Alignment: Good
🧬 Race: Human / Mutated
👨 Gender: Male

📊 Power Stats --->
💡 Intelligence: 88% (as Banner)
💪 Strength: 100%
⚡ Speed: 63%
💯 Durability: 100%
🔋 Power: 98%
🥋 Combat: 85%`
  },
  {
    name: "Hawkeye",
    color: "purple",
    bio: `🏹 Full Name: Clint Barton
🌍 Place of Birth: Waverly, Iowa
🛡️ Alignment: Good
🧬 Race: Human
👨 Gender: Male

📊 Power Stats --->
💡 Intelligence: 75%
💪 Strength: 50%
⚡ Speed: 60%
💯 Durability: 55%
🔋 Power: 45%
🥋 Combat: 90%`
  },
  {
    name: "Captain America",
    color: "blue",
    bio: `🛡️ Full Name: Steve Rogers
🌍 Place of Birth: Brooklyn, New York
⚙️ Alignment: Good
🧬 Race: Enhanced Human
👨 Gender: Male

📊 Power Stats --->
💡 Intelligence: 69%
💪 Strength: 79%
⚡ Speed: 65%
💯 Durability: 75%
🔋 Power: 60%
🥋 Combat: 100%`
  },
  {
    name: "Black Widow",
    color: "white",
    bio: `🕷️ Full Name: Natasha Romanoff
🌍 Place of Birth: Stalingrad, Russia
🎯 Alignment: Good
🧬 Race: Human
👩 Gender: Female

📊 Power Stats --->
💡 Intelligence: 75%
💪 Strength: 55%
⚡ Speed: 70%
💯 Durability: 70%
🔋 Power: 45%
🥋 Combat: 100%`
  }
];

function initPage() {
  const text = "Meet the Avengers. Click on a card to learn more about each hero.";
  const typewriterElement = document.querySelector(".typewriter h2");
  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      typewriterElement.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, 40);
    } else {
      setTimeout(() => {
        document.getElementById("loader").style.display = "none";
        document.getElementById("content").style.display = "block";
      }, 1500);
    }
  }

  typeWriter();
}

function showBio(index) {
  const modal = document.getElementById("modal");
  const modalContent = modal.querySelector(".modal-content");
  const nameElement = document.getElementById("modal-name");
  const bioElement = document.getElementById("modal-bio");

  const hero = bios[index];
  nameElement.textContent = hero.name;
  bioElement.innerHTML = "";

  // Clearing previous shadow effect
  modalContent.style.boxShadow = `0 0 30px ${hero.color}`;

  const lines = hero.bio.split("\n");
  let lineIndex = 0;

  function typeLine() {
    if (lineIndex >= lines.length) return;

    const p = document.createElement("p");
    p.style.opacity = "0";
    p.style.transition = "opacity 0.3s ease-in";
    bioElement.appendChild(p);

    let charIndex = 0;
    const line = lines[lineIndex];
    const typeChar = setInterval(() => {
      if (charIndex < line.length) {
        p.textContent += line.charAt(charIndex);
        charIndex++;
      } else {
        clearInterval(typeChar);
        p.style.opacity = "1";
        lineIndex++;
        setTimeout(typeLine, 100);
      }
    }, 20);
  }

  typeLine();
  modal.style.display = "flex";
}

function closeBio() {
  document.getElementById("modal").style.display = "none";
}
