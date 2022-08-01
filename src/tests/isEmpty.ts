import { isEmpty } from "../validation.ts";
import { assertEquals } from "https://deno.land/std@0.149.0/testing/asserts.ts";

Deno.test("isEmpty - Hello World!", () => {
  assertEquals(isEmpty("Hello World!"), false);
});

Deno.test('isEmpty - " "', () => {
  assertEquals(isEmpty(" "), true);
});

Deno.test("isEmpty - null", () => {
  assertEquals(isEmpty(null), true);
});

Deno.test("isEmpty - undefined", () => {
  assertEquals(isEmpty(undefined), true);
});

Deno.test("isEmpty - true", () => {
  assertEquals(isEmpty(true), false);
});

Deno.test("isEmpty - true", () => {
  assertEquals(isEmpty(false), false);
});

Deno.test("isEmpty - 0", () => {
  assertEquals(isEmpty(0), false);
});
