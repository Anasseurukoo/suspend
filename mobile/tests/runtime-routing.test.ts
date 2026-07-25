import test from 'node:test';
import assert from 'node:assert/strict';

import { usesManualTryOn } from '../src/runtime.ts';

test('Expo Go store client uses the manual fallback', () => {
  assert.equal(usesManualTryOn('storeClient'), true);
});

test('standalone preview APK uses native eye tracking', () => {
  assert.equal(usesManualTryOn('standalone'), false);
});

test('development/bare builds use native eye tracking', () => {
  assert.equal(usesManualTryOn('bare'), false);
});

test('missing legacy app ownership data does not force manual mode', () => {
  assert.equal(usesManualTryOn(undefined), false);
});
