const { readRows } = require("./readRows");

async function sanitizeSheet() {
  console.log("sanitizing sheet rows...");

  const rows = await readRows();

  //get the "total de aulas no semestre"
  const totalSemesterLessons = rows[1][0].split(":")[1].trim();

  //separate the raw sheet data from the titles
  const titles = rows[2];
  const values = [];

  for (let index = 3; index < rows.length; index++) {
    values.push(rows[index]);
  }

  //organize sheet data with the current titles
  const sanitazedSheet = [];

  values.forEach((value) => {
    auxArr = [];

    auxArr["Matricula"] = value[0];
    auxArr["Aluno"] = value[1];
    auxArr["Faltas"] = value[2];
    auxArr["P1"] = value[3];
    auxArr["P2"] = value[4];
    auxArr["P3"] = value[5];
    auxArr["Situação"] = "";
    auxArr["Nota para Aprovação Final"] = "";

    sanitazedSheet.push(auxArr);
  });

  return {
    sanitazedSheet,
    totalSemesterLessons,
  };
}

module.exports = { sanitizeSheet };
