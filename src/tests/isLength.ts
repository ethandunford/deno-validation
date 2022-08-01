import { isLength } from "../validation.ts";
import { assertEquals } from "https://deno.land/std@0.149.0/testing/asserts.ts";

Deno.test("isLength - foo 1-10", () => {
  assertEquals(isLength("foo", 1, 10), true);
});

Deno.test("isLength - three 1-50", () => {
  assertEquals(isLength("123456789", 0, 8), false);
});
