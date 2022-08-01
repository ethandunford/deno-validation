import { isValidIp } from "../validation.ts";
import { assertEquals } from "https://deno.land/std@0.149.0/testing/asserts.ts";

Deno.test("isValidIp - 127.0.0.1", () => {
  assertEquals(isValidIp("127.0.0.1"), true);
});

Deno.test("isValidIp - 255.255.255.0", () => {
  assertEquals(isValidIp("255.255.255.0"), true);
});

Deno.test("isValidIp - 192.168.0.1", () => {
  assertEquals(isValidIp("192.168.0.1"), true);
});

Deno.test("isValidIp - 1200.5.4.3", () => {
  assertEquals(isValidIp("1200.5.4.3"), false);
});

Deno.test("isValidIp - 1200.5.4.3", () => {
  assertEquals(isValidIp("1200.5.4.3"), false);
});

Deno.test("isValidIp - abc.def.ghi.jkl", () => {
  assertEquals(isValidIp("abc.def.ghi.jkl"), false);
});

Deno.test("isValidIp - 255.foo.bar.1", () => {
  assertEquals(isValidIp("255.foo.bar.1"), false);
});

Deno.test("isValidIp - 0.0.0.0", () => {
  assertEquals(isValidIp("0.0.0.0"), false);
});