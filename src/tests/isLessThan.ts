import { isLessThan } from "../validation.ts";
import { assertEquals } from "https://deno.land/std@0.149.0/testing/asserts.ts";

Deno.test("isLessThan - 10 < 4", () => {
  assertEquals(isLessThan(10, 4), false);
});

Deno.test("isLessThan - 3 < 33", () => {
  assertEquals(isLessThan(3, 33), true);
});
