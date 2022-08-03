import { isValidJson } from "../validation.ts";
import { assertEquals } from "https://deno.land/std@0.149.0/testing/asserts.ts";

const jsonExamplePass = `{ "example": "pass" }`;

Deno.test("isValidJson - jsonExamplePass", () => {
  assertEquals(isValidJson(jsonExamplePass), true);
});

Deno.test("isValidJson - null", () => {
  assertEquals(isValidJson("null"), true);
});

Deno.test("isValidJson - ` `", () => {
  assertEquals(isValidJson(" "), false);
});

const jsonExampleFail = `{ "example": failed`;
Deno.test("isValidJson - jsonExampleFail", () => {
  assertEquals(isValidJson(jsonExampleFail), false);
});
