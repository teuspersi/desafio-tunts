const { sanitizeSheet } = require("./sanitizeSheet");

async function applyBusinessRules() {
  console.log("applying business rules to the rows...");
  const { sanitazedSheet, totalSemesterLessons } = await sanitizeSheet();

  // Set the situation of each student based on his grade average
  sanitazedSheet.forEach((student) => {
    const grade1 = parseInt(student["P1"]);
    const grade2 = parseInt(student["P2"]);
    const grade3 = parseInt(student["P3"]);

    const absences = parseInt(student["Faltas"]);
    const absencesLimit = parseInt(totalSemesterLessons) * 0.25;

    const average = parseFloat(((grade1 + grade2 + grade3) / 3).toFixed(2));

    if (absences > absencesLimit) {
      student["Situação"] = "Reprovado por Falta";
      return;
    }

    if (average > 70) {
      student["Situação"] = "Aprovado";
      return;
    }

    if (average < 50) {
      student["Situação"] = "Reprovado por Nota";
      return;
    }

    if (50 <= average < 70) {
      student["Situação"] = "Exame Final";
      return;
    }
  });

  // Calculate the "Nota para Aprovação Final" case the situation is "Exame final"
  sanitazedSheet.forEach((student) => {
    const grade1 = parseInt(student["P1"]);
    const grade2 = parseInt(student["P2"]);
    const grade3 = parseInt(student["P3"]);

    const average = (grade1 + grade2 + grade3) / 3;

    if (student["Situação"] === "Exame Final") {
      student["Nota para Aprovação Final"] = 100 - average;
    } else {
      student["Nota para Aprovação Final"] = 0;
    }
  });

  return sanitazedSheet;
}

module.exports = { applyBusinessRules };
