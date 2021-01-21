const ibantools = require("ibantools");
const path = require("path");

function extract(swift) {
  const details = ibantools.extractBIC(swift);
  if (!details || !details.countryCode) return false;
  const banks = require(`${__dirname}/AllCountries/${details.countryCode}.json`);
  if (!banks) return false;
  const bank = banks.list.find((b) => b.swift_code == swift);
  if (!bank) return false;
  return bank;
}

exports.extract = extract;
