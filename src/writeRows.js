const {
  createGoogleSheetsInstance,
  auth,
  spreadsheetId,
} = require("./googleSheets");

const { applyBusinessRules } = require("./applyBusinessRules");

const { unsanitizeSheet } = require("./unsanitizeSheet");

async function writeRows() {
  const googleSheets = await createGoogleSheetsInstance();

  const sheetWithApliedBusinessRules = await applyBusinessRules();

  const unsanitazedSheet = unsanitizeSheet(sheetWithApliedBusinessRules);

  //Clear sheet old data
  console.log("cleaning up sheet old data...");
  await googleSheets.spreadsheets.values.clear({
    auth,
    spreadsheetId,
    range: "engenharia_de_software!4:70",
  });

  //Insert updated data into sheet
  console.log("inserting new data... (please wait)");
  for (let index = 0; index < unsanitazedSheet.length; index++) {
    await googleSheets.spreadsheets.values.append({
      auth,
      spreadsheetId,
      range: "engenharia_de_software!A:H",
      valueInputOption: "USER_ENTERED",
      resource: {
        values: [
          [
            `${unsanitazedSheet[index][0]}`,
            `${unsanitazedSheet[index][1]}`,
            `${unsanitazedSheet[index][2]}`,
            `${unsanitazedSheet[index][3]}`,
            `${unsanitazedSheet[index][4]}`,
            `${unsanitazedSheet[index][5]}`,
            `${unsanitazedSheet[index][6]}`,
            `${unsanitazedSheet[index][7]}`,
          ],
        ],
      },
    });
  }

  console.log("done!");
}

module.exports = { writeRows };
