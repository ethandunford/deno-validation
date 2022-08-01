import { isUkPostCode } from "../validation.ts";
import { assertEquals } from "https://deno.land/std@0.149.0/testing/asserts.ts";

Deno.test("isUkPostCode - NR12PD", () => {
  assertEquals(isUkPostCode("NR12PD"), true);
});

Deno.test("isUkPostCode - SW1W 0NY", () => {
  assertEquals(isUkPostCode("SW1W 0NY"), true);
});

Deno.test("isUkPostCode - L18JQ", () => {
  assertEquals(isUkPostCode("L1 8JQ"), true);
});

Deno.test("isUkPostCode - PX123", () => {
  assertEquals(isUkPostCode("PX123"), false);
});

Deno.test("isUkPostCode - ADG12", () => {
  assertEquals(isUkPostCode("ADG12"), false);
});
