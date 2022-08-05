import { isAlphanumeric } from "../validation.ts";
import { assertEquals } from "https://deno.land/std@0.149.0/testing/asserts.ts";

Deno.test("isAlphanumeric - Hello", () => {
  assertEquals(isAlphanumeric("Hello"), true);
});

Deno.test("isAlphanumeric - Hello!", () => {
  assertEquals(isAlphanumeric("Hello!"), false);
});

Deno.test('isAlphanumeric - " "', () => {
  assertEquals(isAlphanumeric(" "), false);
});

Deno.test('isAlphanumeric - "%^$%^%4"', () => {
  assertEquals(isAlphanumeric("%^$%^%4"), false);
});

Deno.test("isAlphanumeric - 0", () => {
  assertEquals(isAlphanumeric("0"), false);
});
