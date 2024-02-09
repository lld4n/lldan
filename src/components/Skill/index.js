const fs = require("fs");

const replaces = [
  ["clip-path", "clipPath"],
  ["stroke-width", "strokeWidth"],
  ["stroke-linecap", "strokeLinecap"],
  ["stroke-linejoin", "strokeLinejoin"],
  ["stop-color", "stopColor"],
  ["stop-opacity", "stopOpacity"],
  ["fill-rule", "fillRule"],
  ["clip-rule", "clipRule"],
];
const skills = fs.readdirSync("./src/components/Skill");
for (const item of skills) {
  if (item !== "index.js" && item !== "Skill.module.scss") {
    fs.unlinkSync("./src/components/Skill/" + item);
  }
}
let result = `import styles from "./Skill.module.scss"\n`;
const items = fs.readdirSync("./src/assets/skills");

function generateTitle(title) {
  return title.replace(".svg", "").trim().toUpperCase();
}

function generateSvg(svg) {
  let result = svg;
  for (const rep of replaces) {
    const regex = new RegExp(rep[0], "g");
    result = result.replace(regex, rep[1]);
  }
  result = result.replace(/viewBox="0 0 \d+ \d+"/g, "");
  result = result.replace(/width="(\d+)"/, (match, width) => {
    const newWidth = parseInt(width) + 1;
    return `width = "${newWidth}"`;
  });

  result = result.replace(/height="(\d+)"/, (match, height) => {
    const newHeight = parseInt(height) + 1;
    return `height = "${newHeight}"`;
  });

  return result;
}

for (const item of items) {
  const svg = fs.readFileSync("./src/assets/skills/" + item).toString();
  result += `export function ${generateTitle(item)}() {
  return (
    <div className={styles.wrapper} title="${generateTitle(item)}">
      ${generateSvg(svg)}
    </div>
  );
}`;
}
fs.writeFileSync("./src/components/Skill/Skill.tsx", result);
