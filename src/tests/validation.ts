import * as validation from "../validation.ts";

import { assertEquals } from "https://deno.land/std@0.149.0/testing/asserts.ts";

Deno.test("validation.isEmpty", () => {
  assertEquals(validation.isEmpty(""), true);
  assertEquals(validation.isEmpty("   "), true);
  assertEquals(validation.isEmpty(null), true);
  assertEquals(validation.isEmpty(undefined), true);
  assertEquals(validation.isEmpty(true), false);
  assertEquals(validation.isEmpty(false), false);
  assertEquals(validation.isEmpty("Hello World!"), false);
  assertEquals(validation.isEmpty(0), false);
});

Deno.test("isName", () => {
  assertEquals(validation.isName("John"), true);
  assertEquals(validation.isName("Jane"), true);
  assertEquals(validation.isName(String(1212)), false);
  assertEquals(validation.isName("$%^$%^"), false);
});

Deno.test("isEmail", () => {
  assertEquals(validation.isEmail("test@test.co.uk"), true);
  assertEquals(validation.isEmail("test@test.com"), true);
  assertEquals(validation.isEmail("test@test. com"), false);
  assertEquals(validation.isEmail(" testest.c"), false);
  assertEquals(validation.isEmail("test@@test.com"), false);
});

Deno.test("isGbMobile", () => {
  assertEquals(validation.isGbMobile("+44 (0) 7513 438167"), true);
  assertEquals(validation.isGbMobile("+44 (0) 7513438167"), true);
  assertEquals(validation.isGbMobile("07513 438167"), true);
  assertEquals(validation.isGbMobile("07513438167"), true);
  assertEquals(validation.isGbMobile("+44 7513 438167"), true);
  assertEquals(validation.isGbMobile("+447513438167"), true);
  assertEquals(validation.isGbMobile("+347513438167"), false);
  assertEquals(validation.isGbMobile("+44(0)7513438167"), false);
  assertEquals(validation.isGbMobile("+44 8717 771711"), false);
});

Deno.test("isGbPhone", () => {
  assertEquals(validation.isGbPhone("+447222555555"), true);
  assertEquals(validation.isGbPhone("+44 7222 555 555"), true);
  assertEquals(validation.isGbPhone("(0722) 5555555"), true);
  assertEquals(validation.isGbPhone("(+447222)555555"), true);
  assertEquals(validation.isGbPhone("0722555555"), true);
});