import { isUkPhone } from "../validation.ts";
import { assertEquals } from "https://deno.land/std@0.149.0/testing/asserts.ts";

Deno.test("isUkPhone  -> +447222555555", () => {
  assertEquals(isUkPhone("+447222555555"), true);
});

Deno.test("isUkPhone  -> +44 7222 555 555", () => {
  assertEquals(isUkPhone("+44 7222 555 555"), true);
});

Deno.test("isUkPhone  -> (0722) 5555555", () => {
  assertEquals(isUkPhone("(0722) 5555555"), true);
});

Deno.test("isUkPhone  -> +44 7222 555 55", () => {
  assertEquals(isUkPhone("+44 7222 555 55"), false);
});

Deno.test("isUkPhone  -> (0722) 5555555", () => {
  assertEquals(isUkPhone("(0722) 5555555"), true);
});

Deno.test("isUkPhone  -> (+447222)555555", () => {
  assertEquals(isUkPhone("(+447222)555555"), true);
});

Deno.test("isUkPhone  -> 072255555", () => {
  assertEquals(isUkPhone("072255555"), false);
});
