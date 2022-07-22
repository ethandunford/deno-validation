import { isEmail } from "../validation.ts";
import { assertEquals } from "https://deno.land/std@0.149.0/testing/asserts.ts";

Deno.test("isEmail ->  test@test.co.uk", () => {
  assertEquals(isEmail("test@test.co.uk"), true);
});

Deno.test("isEmail ->  test@test.com", () => {
  assertEquals(isEmail("test@test.com"), true);
});

Deno.test("isEmail ->  test@test. com", () => {
  assertEquals(isEmail("test@test. com"), false);
});

Deno.test('isEmail ->  " testest.c"', () => {
  assertEquals(isEmail(" testest.c"), false);
});

Deno.test("isEmail ->  test@@test.com", () => {
  assertEquals(isEmail("test@@test.com"), false);
});
