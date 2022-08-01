import { isYesOrNo } from "../validation.ts";
import { assertEquals } from "https://deno.land/std@0.149.0/testing/asserts.ts";

Deno.test("isYesOrNo - Yes", () => {
  assertEquals(isYesOrNo("Yes"), true);
});

Deno.test("isYesOrNo - No", () => {
  assertEquals(isYesOrNo("No"), true);
});

Deno.test("isYesOrNo - Yees", () => {
  assertEquals(isYesOrNo("Yees"), false);
});

Deno.test("isYesOrNo - Noooooo", () => {
  assertEquals(isYesOrNo("Noooooo"), false);
});
