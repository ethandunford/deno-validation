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

| validator  | description                                          | example       |
| ---------- | ---------------------------------------------------- | ------------- |
| isEmpty    | check is a given object is empty                     | ""            |
| isUkMobile | only valid UK mobile numbers _(exludes Isle of Man)_ | 07100900023   |
| isUkPhone  | only valid UK phone numbers                          | 01603661068   |
| isName     | checks to see if name is valid                       | Layhey        |
| isEmail    | checks to see if email is valid                      | test@test.com |

## Running locally

[TODO]

## Testing

```
deno test src/tests/*.ts
```

## License

Apache License 2.0

# Version

0.0.2

## Contributing

1. Fork it (<https://github.com/ethandunford/deno-validation/fork>)
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request

## Contributors

- [ethandunford](https://github.com/ethandunford) Ethan Dunford - Creator
- [anharmiah](https://github.com/AnharHussainMiah) Anhar Miah - Contributor
