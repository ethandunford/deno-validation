import { isDate } from "../validation.ts";
import { assertEquals } from "https://deno.land/std@0.149.0/testing/asserts.ts";

Deno.test("isDate - 2023-02-13", () => {
  assertEquals(isDate("2023-02-13"), true);
});

Deno.test("isDate - 2023/02/13", () => {
  assertEquals(isDate("2023/02/13"), true);
});

Deno.test("isDate - 2023-22-13", () => {
  assertEquals(isDate("2023-22-13"), false);
});

Deno.test("isDate - 02-13-2023", () => {
  assertEquals(isDate("2023-22-13"), false);
});
