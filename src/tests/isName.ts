import { isName } from "../validation.ts";
import { assertEquals } from "https://deno.land/std@0.149.0/testing/asserts.ts";

Deno.test("isName - Layhey", () => {
  assertEquals(isName("Layhey"), true);
});

Deno.test("isName - Layhey", () => {
  assertEquals(isName("Layhey", 2), false);
});

Deno.test("isName - Randy", () => {
  assertEquals(isName("Randy"), true);
});

Deno.test("isName - 1234", () => {
  assertEquals(isName(String(1212)), false);
});

Deno.test("isName - $%^$%^", () => {
  assertEquals(isName("$%^$%^"), false);
});
