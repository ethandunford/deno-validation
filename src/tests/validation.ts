import { isEmpty } from "../mods.ts";
import { assertEquals } from "https://deno.land/std@0.149.0/testing/asserts.ts";

Deno.test("isEmpty", () => {
  assertEquals(isEmpty(""), true);
  assertEquals(isEmpty("   "), true);
  assertEquals(isEmpty(null), true);
  assertEquals(isEmpty(undefined), true);
  assertEquals(isEmpty(true), false);
  assertEquals(isEmpty(false), false);
  assertEquals(isEmpty("Hello World!"), false);
  assertEquals(isEmpty(0), false);
});
