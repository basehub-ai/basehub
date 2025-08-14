import { getFieldFromPath } from "./genql/runtime/_generate-graphql-operation";
import { expect, test } from "vitest";

test("should throw helpful error for non-existing fields", () => {
  // Test that the runtime error has been improved when schema validation fails
  expect(() => {
    // Create a minimal schema type
    const mockRoot = {
      name: "Query",
      fields: {
        __typename: { type: { name: "String" } },
        validField: { type: { name: "String" } }
      }
    };
    
    // This should throw for a non-existing field
    getFieldFromPath(mockRoot as any, ["nonExistingField"]);
  }).toThrow(/does not have a field.*nonExistingField.*This often happens when/);
  
  // The error should provide helpful guidance
  expect(() => {
    const mockRoot = {
      name: "Query", 
      fields: {
        __typename: { type: { name: "String" } }
      }
    };
    getFieldFromPath(mockRoot as any, ["anotherBadField"]);
  }).toThrow(/Run 'npx basehub' to regenerate types/);
});

test("should work for valid fields", () => {
  // This should not throw for valid fields
  const mockRoot = {
    name: "Query",
    fields: {
      __typename: { type: { name: "String" } },
      validField: { type: { name: "String" } }
    }
  };
  
  const result = getFieldFromPath(mockRoot as any, ["validField"]);
  expect(result.type.name).toBe("String");
});