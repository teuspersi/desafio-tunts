const { google } = require("googleapis");

const spreadsheetId = "1V28aRL4tmisJRIET7mMaAbAR1MDg9DN6_neOoW-iThE";

console.log("authenticating in google auth api...");

//authenticate in google auth api
const auth = new google.auth.GoogleAuth({
  keyFile: "credentials.json",
  scopes: "https://www.googleapis.com/auth/spreadsheets",
});

console.log("creating a google sheets instance...");
//create a google sheet instance
async function createGoogleSheetsInstance() {
  const client = await auth.getClient();

  const googleSheets = google.sheets({
    version: "v4",
    auth: client,
  });

  return googleSheets;
}

module.exports = { createGoogleSheetsInstance, auth, spreadsheetId };
