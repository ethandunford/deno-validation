import { isLettersAndSpaceAndNo } from "../validation.ts";
import { assertEquals } from "https://deno.land/std@0.149.0/testing/asserts.ts";

Deno.test("isLettersAndSpaceAndNo - Jim layhey", () => {
  assertEquals(isLettersAndSpaceAndNo("Jim Layhey"), true);
});

Deno.test("isLettersAndSpaceAndNo - Randy Layhey 12y", () => {
  assertEquals(isLettersAndSpaceAndNo("Randy Layhey 12"), true);
});

Deno.test("isLettersAndSpaceAndNo - 1234", () => {
  assertEquals(isLettersAndSpaceAndNo(String(1212)), true);
});

Deno.test("isLettersAndSpaceAndNo - $%^$%^ ", () => {
  assertEquals(isLettersAndSpaceAndNo("$%^$%^ "), false);
});

Deno.test('isLettersAndSpaceAndNo - " " ', () => {
  assertEquals(isLettersAndSpaceAndNo(" "), true);
});

Deno.test("isLettersAndSpaceAndNo - Jim", () => {
  assertEquals(isLettersAndSpaceAndNo("Jim"), true);
});

Deno.test('isLettersAndSpaceAndNo - " Jim', () => {
  assertEquals(isLettersAndSpaceAndNo(" Jim"), true);
});

Deno.test('isLettersAndSpaceAndNo - "Jim ', () => {
  assertEquals(isLettersAndSpaceAndNo(" Jim"), true);
});

Deno.test('isLettersAndSpaceAndNo - "Randy£$"£^&*^&*"|"£ ', () => {
  assertEquals(isLettersAndSpaceAndNo(`Randy£$"£^&*^&*"|"£ `), false);
});
