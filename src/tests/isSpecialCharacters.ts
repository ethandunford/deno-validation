import { isSpecialCharacters } from "../validation.ts";
import { assertEquals } from "https://deno.land/std@0.149.0/testing/asserts.ts";

Deno.test('isSpecialCharacters - "/()£$%^"', () => {
  assertEquals(isSpecialCharacters("/()£$%"), true);
});

Deno.test("isSpecialCharacters - 0", () => {
  assertEquals(isSpecialCharacters("0"), false);
});

Deno.test("isSpecialCharacters - Hello!", () => {
  assertEquals(isSpecialCharacters("Hello"), false);
});

Deno.test('isSpecialCharacters - " "', () => {
  assertEquals(isSpecialCharacters(" "), false);
});
