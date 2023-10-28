import sum from "./sum";
import { test, expect } from "@jest/globals";

test('testing for sum function', () => { 
    expect(sum(20, 10)).toBe(30)
 })