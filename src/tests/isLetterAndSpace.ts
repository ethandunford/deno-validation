import { isLetterAndSpace } from "../validation.ts";
import { assertEquals } from "https://deno.land/std@0.149.0/testing/asserts.ts";

Deno.test("isLetterAndSpace - Jim layhey", () => {
  assertEquals(isLetterAndSpace("Jim Layhey"), true);
});

Deno.test("isLetterAndSpace - Randy", () => {
  assertEquals(isLetterAndSpace("Randy"), true);
});

Deno.test("isLetterAndSpace - 1234", () => {
  assertEquals(isLetterAndSpace(String(1234)), false);
});

Deno.test("isLetterAndSpace - $%^$%^ ", () => {
  assertEquals(isLetterAndSpace("$%^$%^ "), false);
});

Deno.test('isLetterAndSpace - " " ', () => {
  assertEquals(isLetterAndSpace(" "), true);
});

Deno.test("isLetterAndSpace - Jim", () => {
  assertEquals(isLetterAndSpace("Jim"), true);
});

Deno.test('isLetterAndSpace - " Jim', () => {
  assertEquals(isLetterAndSpace(" Jim"), true);
});

Deno.test('isLetterAndSpace - "Jim ', () => {
  assertEquals(isLetterAndSpace(" Jim"), true);
});
