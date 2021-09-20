const {
  createGoogleSheetsInstance,
  auth,
  spreadsheetId,
} = require("./googleSheets");

async function readRows() {
  console.log("reading sheet rows...");
  const googleSheets = await createGoogleSheetsInstance();

  //get all rows values from the sheet
  const getRows = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: "engenharia_de_software",
  });

  return getRows.data.values;
}

module.exports = { readRows };
