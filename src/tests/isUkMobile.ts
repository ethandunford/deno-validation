import { isUkMobile } from "../validation.ts";
import { assertEquals } from "https://deno.land/std@0.149.0/testing/asserts.ts";

Deno.test("isUkMobile - Phones since January 2017 (071x)", () => {
  assertEquals(isUkMobile("07100900023"), true);
});
Deno.test("isUkMobile - Phones since November 2014 (073x)", () => {
  assertEquals(isUkMobile("07300900023"), true);
});
Deno.test("isUkMobile - Phones since November 2009 (074x)", () => {
  assertEquals(isUkMobile("07400900023"), true);
});
Deno.test("isUkMobile - Vodafone, 02 A (075x)", () => {
  assertEquals(isUkMobile("07500900023"), true);
});
Deno.test("isUkMobile - Vodafone, 02 B (077x)", () => {
  assertEquals(isUkMobile("07700900023"), true);
});
Deno.test("isUkMobile - Vodafone, 02 C (078x)", () => {
  assertEquals(isUkMobile("07800900023"), true);
});
Deno.test("isUkMobile - Orange, EE, one2one (079x)", () => {
  assertEquals(isUkMobile("07900900023"), true);
});
Deno.test("isUkMobile - should not include characters", () => {
  assertEquals(isUkMobile("071x0900023"), false);
});
Deno.test("isUkMobile - should not have space before", () => {
  assertEquals(isUkMobile(" 07100900023"), false);
});
Deno.test("isUkMobile - should not have space after", () => {
  assertEquals(isUkMobile("07100900023 "), false);
});
Deno.test("isUkMobile - should not have space before and after", () => {
  assertEquals(isUkMobile(" 07100900023 "), false);
});
Deno.test("isUkMobile - should not have multiple spaces inbetween", () => {
  assertEquals(isUkMobile("071009   00023"), false);
});
Deno.test("isUkMobile - should not be shorter then 11 digits", () => {
  assertEquals(isUkMobile("0710090002"), false);
});
Deno.test("isUkMobile - should not be longer then 11 digits", () => {
  assertEquals(isUkMobile("071009000237"), false);
});

Deno.test("isUkMobile - +44 (0) 7513 438167", () => {
  assertEquals(isUkMobile("+44 (0) 7513 438167"), false);
});
