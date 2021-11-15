// unit.test.js

const { test, expect } = require('@jest/globals');
const functions = require('../code-to-unit-test/unit-test-me.js');
test('isPhoneNumber test1', () => {
    expect(functions.isPhoneNumber('(232)-343-3232')).toBe(true);
});
test('isPhoneNumber test2', () => {
    expect(functions.isPhoneNumber('(111)-111-1111')).toBe(true);
});
test('isPhoneNumber test3', () => {
    expect(functions.isPhoneNumber('1234567890')).toBe(false);
});
test('isPhoneNumber test4', () => {
    expect(functions.isPhoneNumber('')).toBe(false);
});

test('isEmail test1', () => {
    expect(functions.isEmail('randomjoe@hotmail.com')).toBe(true);
});
test('isEmail test2', () => {
    expect(functions.isEmail('fakeperson@gmail.com')).toBe(true);
});
test('isEmail test3', () => {
    expect(functions.isEmail('')).toBe(false);
});
test('isEmail test4', () => {
    expect(functions.isEmail('randomjoemama')).toBe(false);
});

test('isStrongPassword test1', () => {
    expect(functions.isStrongPassword('aaaa')).toBe(true);
});
test('isStrongPassword test2', () => {
    expect(functions.isStrongPassword('a000')).toBe(true);
});
test('isStrongPassword test3', () => {
    expect(functions.isStrongPassword('')).toBe(false);
});
test('isStrongPassword test4', () => {
    expect(functions.isStrongPassword('1032')).toBe(false);
});

test('isDate test1', () => {
    expect(functions.isDate('10/32/1111')).toBe(true);
});
test('isDate test2', () => {
    expect(functions.isDate('1/32/1111')).toBe(true);
});
test('isDate test3', () => {
    expect(functions.isDate('')).toBe(false);
});
test('isDate test4', () => {
    expect(functions.isDate('10/323/1111')).toBe(false);
});

test('isHexColor test1', () => {
    expect(functions.isHexColor('#00ffff')).toBe(true);
});
test('isHexColor test2', () => {
    expect(functions.isHexColor('#ff0000')).toBe(true);
});
test('isHexColor test3', () => {
    expect(functions.isHexColor('')).toBe(false);
});
test('isHexColor test4', () => {
    expect(functions.isHexColor('#fgdgfg')).toBe(false);
});
// TODO - Part 2