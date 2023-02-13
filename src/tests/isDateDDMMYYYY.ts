import { isDateDDMMYYYY } from "../validation.ts";
import { assertEquals } from "https://deno.land/std@0.149.0/testing/asserts.ts";

Deno.test("isDateDDMMYYYY - 19/12/1989", () => {
  assertEquals(isDateDDMMYYYY("19/12/1989"), true);
});

Deno.test("isDateDDMMYYYY - 19-12-1989", () => {
  assertEquals(isDateDDMMYYYY("19-12-1989"), false);
});

Deno.test("isDateDDMMYYYY - 2023-02-13", () => {
  assertEquals(isDateDDMMYYYY("2023-02-13"), false);
});
