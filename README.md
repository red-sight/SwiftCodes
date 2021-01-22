# Description
Extracts the bank details from the bank SWIFT/BIC (using database from https://github.com/PeterNotenboom/SwiftCodes)
If the SWIFT is not present in the list, returns false.

## Installation
```javascript
npm i -s swift-to-bank-details
```
## Usage
```javascript
const banks = require("../index.js");
const swift = 'RIVEGB21CTY';
const bank = banks.extract(swift);
console.log(bank)

/* 
Will return 
{
  id: 1,
  bank: '1776 RIVERBANK LTD',
  city: 'LONDON',
  branch: '(THE CITY OF LONDON)',
  swift_code: 'RIVEGB21CTY',
  country_code: 'GB'
}
 */
```

## SwiftCodes
Swift Codes or BIC Codes for all the Banks in the world.

All the info is grabbed from public websites.
