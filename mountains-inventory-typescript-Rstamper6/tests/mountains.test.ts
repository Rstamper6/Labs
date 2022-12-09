import { findnameOfTallestMountain } from "../src/mountains";

describe("findnameOfTallestMountain", () => {
  test("middle mountain", () => {
    const name = findnameOfTallestMountain([
      { name: "Kilimanjaro", height: 19341 },
      { name: "Everest", height: 29029 },
      { name: "Denali", height: 20310 }
    ]);
    expect(name).toBe("Everest");
  });
  test("first mountain", () => {
    const name = findnameOfTallestMountain([
      { name: "Everest", height: 29029 },
      { name: "Kilimanjaro", height: 19341 },
      { name: "Denali", height: 20310 }
    ]);
    expect(name).toBe("Everest");
  });
  test("last mountain", () => {
    const name = findnameOfTallestMountain([
      { name: "Kilimanjaro", height: 19341 },
      { name: "Denali", height: 20310 },
      { name: "Everest", height: 29029 }
    ]);
    expect(name).toBe("Everest");
  });
});