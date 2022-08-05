import { isIpV4 } from "../validation.ts";
import { assertEquals } from "https://deno.land/std@0.149.0/testing/asserts.ts";

Deno.test("isIpV4 - 127.0.0.1", () => {
  assertEquals(isIpV4("127.0.0.1"), true);
});

Deno.test("isIpV4 - 31.124.210.157", () => {
  assertEquals(isIpV4("31.124.210.157"), true);
});

Deno.test("isIpV4 - 192.168.0.1", () => {
  assertEquals(isIpV4("192.168.0.1"), true);
});

Deno.test("isIpV4 - 0.0.0.0", () => {
  assertEquals(isIpV4("0.0.0.0"), true);
});

Deno.test("isIpV4 - 2001:0db8:85a3:0000:0000:8a2e:0370:7334", () => {
  assertEquals(isIpV4("2001:0db8:85a3:0000:0000:8a2e:0370:7334"), false);
});

Deno.test("isIpV4 - FE80:0000:0000:0000:0202:B3FF:FE1E:8329", () => {
  assertEquals(isIpV4("FE80:0000:0000:0000:0202:B3FF:FE1E:8329"), false);
});
