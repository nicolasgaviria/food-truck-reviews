import { formatDistance } from "./distance";

describe("formatDistance", () => {
  it("should format the distance correctly", () => {
    expect(formatDistance(4176.809218161696)).toBe("4.2km away");
    expect(formatDistance(1000)).toBe("1.0km away");
    expect(formatDistance(12345)).toBe("12.3km away");
    expect(formatDistance(0)).toBe("0.0km away");
  });
});
