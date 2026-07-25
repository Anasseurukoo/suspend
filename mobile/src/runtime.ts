/**
 * Expo Go runs inside the Store Client environment. Standalone/internal APKs
 * and development builds must use the native face-tracking implementation.
 */
export function usesManualTryOn(executionEnvironment: unknown): boolean {
  return executionEnvironment === 'storeClient';
}
