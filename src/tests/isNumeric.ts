import { isNumeric } from "../validation.ts";
import { assertEquals } from "https://deno.land/std@0.149.0/testing/asserts.ts";

Deno.test("isNumeric - 0", () => {
  assertEquals(isNumeric("0"), true);
});

Deno.test("isNumeric - Hello!", () => {
  assertEquals(isNumeric("Hello"), false);
});

Deno.test('isNumeric - " "', () => {
  assertEquals(isNumeric(" "), false);
});

Deno.test('isNumeric - "%^$%^%4"', () => {
  assertEquals(isNumeric("%^$%^%4"), false);
});
