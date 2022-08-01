import { isGreaterThan } from "../validation.ts";
import { assertEquals } from "https://deno.land/std@0.149.0/testing/asserts.ts";

Deno.test("isGreaterThan - 10 > 4", () => {
  assertEquals(isGreaterThan(10, 4), true);
});

Deno.test("isGreaterThan - 3 > 33", () => {
  assertEquals(isGreaterThan(3, 3), false);
});
