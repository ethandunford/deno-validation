import { isIpV4 } from "../validation.ts";
import { assertEquals } from "https://deno.land/std@0.149.0/testing/asserts.ts";

Deno.test("isIpV4 - 127.0.0.1", () => {
  assertEquals(isIpV4("127.0.0.1"), true);
});

Deno.test("isIpV4 - 192.168.0.1", () => {
  assertEquals(isIpV4("192.168.0.1"), true);
});

Deno.test("isIpV4 - 255.255.255.0", () => {
  assertEquals(isIpV4("255.255.255.0"), true);
});

Deno.test("isIpV4 - 255.255.255.255", () => {
  assertEquals(isIpV4("255.255.255.255"), false);
});

Deno.test("isIpV4 - 0.0.0.0", () => {
  assertEquals(isIpV4("0.0.0.0"), false);
});

Deno.test("isIpV4 - 1200.5.4.3", () => {
  assertEquals(isIpV4("1200.5.4.3"), false);
});

Deno.test("isIpV4 - 1200.5.4.3", () => {
  assertEquals(isIpV4("1200.5.4.3"), false);
});

Deno.test("isIpV4 - abc.def.ghi.jkl", () => {
  assertEquals(isIpV4("abc.def.ghi.jkl"), false);
});

Deno.test("isIpV4 - 255.foo.bar.1", () => {
  assertEquals(isIpV4("255.foo.bar.1"), false);
});
