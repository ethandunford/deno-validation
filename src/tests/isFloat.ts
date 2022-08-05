import { isFloat } from "../validation.ts";
import { assertEquals } from "https://deno.land/std@0.149.0/testing/asserts.ts";

Deno.test("isFloat - 1.5", () => {
  assertEquals(isFloat("1.5"), true);
});

Deno.test("isFloat - -1.5", () => {
  assertEquals(isFloat("-3.4"), true);
});

Deno.test("isFloat - 0", () => {
  assertEquals(isFloat("0"), true);
});

Deno.test("isFloat - Hello!", () => {
  assertEquals(isFloat("Hello"), false);
});

Deno.test('isFloat - " "', () => {
  assertEquals(isFloat(" "), false);
});
