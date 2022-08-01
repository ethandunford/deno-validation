import { isBetween } from "../validation.ts";
import { assertEquals } from "https://deno.land/std@0.149.0/testing/asserts.ts";

Deno.test("isBetween - 4 1-10", () => {
  assertEquals(isBetween(4, 1, 10), true);
});

Deno.test("isBetween - 33 1-50", () => {
  assertEquals(isBetween(33, 1, 50), true);
});

Deno.test("isBetween - -20 1-10", () => {
  assertEquals(isBetween(-20, 1, 10), false);
});

Deno.test("isBetween - 20 1-10", () => {
  assertEquals(isBetween(-20, 1, 10), false);
});
