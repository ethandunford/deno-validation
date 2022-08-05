import { isLetterAndSpaceAndNumber } from "../validation.ts";
import { assertEquals } from "https://deno.land/std@0.149.0/testing/asserts.ts";

Deno.test("isLetterAndSpaceAndNumber - Jim layhey", () => {
  assertEquals(isLetterAndSpaceAndNumber("Jim Layhey"), true);
});

Deno.test("isLetterAndSpaceAndNumber - Randy Layhey 12y", () => {
  assertEquals(isLetterAndSpaceAndNumber("Randy Layhey 12"), true);
});

Deno.test("isLetterAndSpaceAndNumber - 1234", () => {
  assertEquals(isLetterAndSpaceAndNumber(String(1212)), true);
});

Deno.test("isLetterAndSpaceAndNumber - $%^$%^ ", () => {
  assertEquals(isLetterAndSpaceAndNumber("$%^$%^ "), false);
});

Deno.test('isLetterAndSpaceAndNumber - " " ', () => {
  assertEquals(isLetterAndSpaceAndNumber(" "), true);
});

Deno.test("isLetterAndSpaceAndNumber - Jim", () => {
  assertEquals(isLetterAndSpaceAndNumber("Jim"), true);
});

Deno.test('isLetterAndSpaceAndNumber - " Jim', () => {
  assertEquals(isLetterAndSpaceAndNumber(" Jim"), true);
});

Deno.test('isLetterAndSpaceAndNumber - "Jim ', () => {
  assertEquals(isLetterAndSpaceAndNumber(" Jim"), true);
});

Deno.test('isLetterAndSpaceAndNumber - "Randy£$"£^&*^&*"|"£ ', () => {
  assertEquals(isLetterAndSpaceAndNumber(`Randy£$"£^&*^&*"|"£ `), false);
});