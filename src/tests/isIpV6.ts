import { isIpV6 } from "../validation.ts";
import { assertEquals } from "https://deno.land/std@0.149.0/testing/asserts.ts";


Deno.test("isIpV6 - 2001:0db8:85a3:0000:0000:8a2e:0370:7334", () => {
  assertEquals(isIpV6("2001:0db8:85a3:0000:0000:8a2e:0370:7334"), true);
});

Deno.test("isIpV6 - FE80:0000:0000:0000:0202:B3FF:FE1E:8329", () => {
  assertEquals(isIpV6("FE80:0000:0000:0000:0202:B3FF:FE1E:8329"), true);
});

Deno.test("isIpV 6- 127.0.0.1", () => {
  assertEquals(isIpV6("127.0.0.1"), false);
});

Deno.test("isIpV6 - 192.168.0.1", () => {
  assertEquals(isIpV6("192.168.0.1"), false);
});

Deno.test("isIpV6 - 255.255.255.0", () => {
  assertEquals(isIpV6("255.255.255.0"), false);
});
