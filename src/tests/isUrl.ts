import { isUrl } from "../validation.ts";
import { assertEquals } from "https://deno.land/std@0.149.0/testing/asserts.ts";

Deno.test("isUrl - http://deno.land/", () => {
  assertEquals(isUrl("http://deno.land/"), true);
});

Deno.test("isUrl - https://deno.land/", () => {
  assertEquals(isUrl("https://deno.land/"), true);
});

Deno.test("isUrl - https://deno.land/#installation", () => {
  assertEquals(isUrl("https://deno.land/#installation"), true);
});

Deno.test("isUrl - https://deno.land?foo=bah", () => {
  assertEquals(isUrl("https://deno.land?foo=bah"), true);
});

Deno.test("isUrl - www.deno", () => {
  assertEquals(isUrl("www.deno"), false);
});

Deno.test("isUrl - www.deno-.land", () => {
  assertEquals(isUrl("www.deno-.land"), false);
});

Deno.test("isUrl - deno.land", () => {
  assertEquals(isUrl("deno.land"), false);
});

Deno.test("isUrl - www#deno.land", () => {
  assertEquals(isUrl("www#deno.land"), false);
});
