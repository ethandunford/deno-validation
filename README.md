```
            _ _     _       _   _             
/\   /\__ _| (_) __| | __ _| |_(_) ___  _ __  
\ \ / / _` | | |/ _` |/ _` | __| |/ _ \| '_ \ 
 \ V / (_| | | | (_| | (_| | |_| | (_) | | | |
  \_/ \__,_|_|_|\__,_|\__,_|\__|_|\___/|_| |_|
```

# Validation

[![language:language](https://img.shields.io/badge/language-deno-black)]()

A general purpose validation library for Deno.

## Validators

This is the list of current validators

| validator             | description                                                                                    | example                                 |
| --------------------- | ---------------------------------------------------------------------------------------------- | --------------------------------------- |
| isAlphanumeric        | checks that a string only contains alphanumeric characters                                     | hello                                   |
| isNumeric             | checks that a string only contains numeric characters                                          | 123                                     |
| isSpecialCharacters   | checks that a string only contains special characters                                          | 1/()£$%^"                               |
| isEmpty               | checks that a string is empty                                                                  | ""                                      |
| isTitle               | checks to against Mr, Ms, Mrs, Miss, Dr, Rev, Other                                            | Dr                                      |
| isName                | checks to see if name is valid                                                                 | Layhey                                  |
| isEmail               | checks to see if email is valid                                                                | test@test.com                           |
| isMaritalStatus       | checks if string is a valid martial status single, married, civil partnered, divorced, widowed | single                                  |
| isUkMobile            | only valid UK mobile numbers _(exludes Isle of Man)_                                           | 07100900023                             |
| isUkPhone             | only valid UK phone numbers                                                                    | 01603661068                             |
| isUkNationalInsurance | only valid UK national insurance numbers                                                       | SP939393H                               |
| isUkPostCode          | only valid UK postcodes                                                                        | NR12PD                                  |
| isLetterAndSpace      | checks to see if a string contains letters and spaces                                          | Jim Layhey                              |
| isLetterAndSpaceAndNo | checks to see if a string contains letters, spaces and numbers                                 | Randy Layhey 12                         |
| isNumberAndSpace      | checks to see if a string contains numbers and spaces                                          | 1 2 3                                   |
| isFloat               | checks to see if a string is a valid float                                                     | 1.5                                     |
| isLength              | checks if string is between two values                                                         | foo, 1, 10                              |
| isBetween             | checks if number is between two values                                                         | 4, 0, 10                                |
| isBetween             | checks if number is between two values                                                         | 4, 0, 10                                |
| isGreaterThan         | checks if number is greater than                                                               | 10, 4                                   |
| isLessThan            | checks if number is less than                                                                  | 4, 10                                   |
| isYesOrNo             | checks that a string is yes or no                                                              | Yes                                     |
| isValidJSON           | checks that a string is valid json                                                             | { "example": "pass" }                   |
| isIpV4                | checks that a string is a valid IP V4 address                                                  | 127.0.0.1                               |
| isIpV6                | checks that a string is a valid IP V6 address                                                  | 2001:0db8:85a3:0000:0000:8a2e:0370:7334 |
| isUrl                 | checks that a string is a valid URL                                                            | https://deno.land/                      |

## Usage

```
import { isName } from "https://raw.githubusercontent.com/ethandunford/deno-validation/main/src/validation.ts";

// true
console.log(isName("Layhey"))

// false
console.log(isName(String(1212)))
```

## Testing

```
deno test src/tests/*.ts
```

## License

Apache License 2.0

# Version

1.0

## Contributing

1. Fork it (<https://github.com/ethandunford/deno-validation/fork>)
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request

## Contributors

- [ethandunford](https://github.com/ethandunford) Ethan Dunford - Creator
- [anharmiah](https://github.com/AnharHussainMiah) Anhar Miah - Contributor
