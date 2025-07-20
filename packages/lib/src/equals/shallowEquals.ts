export const shallowEquals = (a: unknown, b: unknown) => {
  if (a === b) return true;

  if (a !== null && b !== null) {
    // 배열 비교
    if (Array.isArray(a) && Array.isArray(b)) {
      if (a.length === b.length && a.every((item, index) => item === b[index])) {
        return true;
      }
      return false;
    }

    // 객체 비교
    if (typeof a === "object" && typeof b === "object") {
      const objA = a as Record<string, unknown>;
      const objB = b as Record<string, unknown>;

      const keysA = Object.keys(objA);
      const keysB = Object.keys(objB);

      if (keysA.length !== keysB.length) {
        return false;
      }

      for (const key of keysA) {
        if (objA[key] !== objB[key]) return false;
      }

      return true;
    }
  }

  return false;
};
