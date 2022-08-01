import { isTitle } from "../validation.ts";
import { assertEquals } from "https://deno.land/std@0.149.0/testing/asserts.ts";

Deno.test("isTitle - Mr", () => {
  assertEquals(isTitle("Mr"), true);
});

Deno.test("isTitle -  Ms", () => {
  assertEquals(isTitle("Ms"), true);
});

Deno.test("isTitle - Mrs", () => {
  assertEquals(isTitle("Mrs"), true);
});

Deno.test("isTitle - Miss", () => {
  assertEquals(isTitle("Miss"), true);
});

Deno.test("isTitle - Dr", () => {
  assertEquals(isTitle("Dr"), true);
});

Deno.test("isTitle - Rev", () => {
  assertEquals(isTitle("Rev"), true);
});

Deno.test("isTitle - Other", () => {
  assertEquals(isTitle("Other"), true);
});

Deno.test("isTitle - Mrr", () => {
  assertEquals(isTitle("Mrr"), false);
});

Deno.test("isTitle - MMrs", () => {
  assertEquals(isTitle("Mrss"), false);
});

Deno.test("isTitle - DrDr", () => {
  assertEquals(isTitle("DrDr"), false);
});

Deno.test("isTitle - Drrrr", () => {
  assertEquals(isTitle("Drrr"), false);
});
