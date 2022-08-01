import { isNumberAndSpace } from "../validation.ts";
import { assertEquals } from "https://deno.land/std@0.149.0/testing/asserts.ts";

Deno.test("isNumberAndSpace - 1 2 3 4", () => {
  assertEquals(isNumberAndSpace(" 1 2 3 4"), true);
});

Deno.test("isNumberAndSpace - 1234", () => {
  assertEquals(isNumberAndSpace(String(1234)), true);
});

Deno.test("isNumberAndSpace - Jim layhey", () => {
  assertEquals(isNumberAndSpace("Jim Layhey"), false);
});

Deno.test("isNumberAndSpace - $%^$%^ ", () => {
  assertEquals(isNumberAndSpace("$%^$%^ "), false);
});
