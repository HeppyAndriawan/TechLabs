const Capitalize = (rules, text) => {
  const objString = text.split(" ");

  if (rules === "single") {
    const newText = objString[0].charAt(0).toUpperCase() + text.slice(1);
    return newText;
  }
  if (rules === "all") {
    let newText = text
      .toLowerCase()
      .split(" ")
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(" ");
    return newText;
  }
};

module.exports = Capitalize;

/**
 * HOW TO USE
 * Capitalize(rules, text)
 * Capitalize("all","thank you for register")
 * OPTION : "all" OR "single"
 */
