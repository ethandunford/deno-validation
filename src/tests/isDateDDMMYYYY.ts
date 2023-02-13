import { isDateYYYYMMDD } from "../validation.ts";
import { assertEquals } from "https://deno.land/std@0.149.0/testing/asserts.ts";

Deno.test("isDateYYYYMMDD - 19/12/1989", () => {
  assertEquals(isDateYYYYMMDD("19/12/1989"), true);
});

Deno.test("isDateYYYYMMDD - 19-12-1989", () => {
  assertEquals(isDateYYYYMMDD("19-12-1989"), false);
});

Deno.test("isDateYYYYMMDD - 2023-02-13", () => {
  assertEquals(isDateYYYYMMDD("2023-02-13"), false);
});
