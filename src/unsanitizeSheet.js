function unsanitizeSheet(sanitazedSheet) {
  console.log("turning sheet back to default pattern (unsanitizing)...");
  const unsanitazedSheet = [];

  // turn sheet pattern back to default, to facilitate the insertion
  sanitazedSheet.forEach((student) => {
    auxArr = [];

    auxArr[0] = student["Matricula"];
    auxArr[1] = student["Aluno"];
    auxArr[2] = student["Faltas"];
    auxArr[3] = student["P1"];
    auxArr[4] = student["P2"];
    auxArr[5] = student["P3"];
    auxArr[6] = student["Situação"];
    auxArr[7] = student["Nota para Aprovação Final"];

    unsanitazedSheet.push(auxArr);
  });

  return unsanitazedSheet;
}

module.exports = { unsanitizeSheet };
