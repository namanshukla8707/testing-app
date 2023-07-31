import { renderHook, screen } from "@testing-library/react";
import { useCounter } from "./useCounter";

describe('useCounter', () => {
  test('should renders the initial count', () => {
      const {result }=renderHook(useCounter);
      expect(result.current.count).toBe(0);
  })
  
})
