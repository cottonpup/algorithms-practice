function findTheDistanceValue(arr1: number[], arr2: number[], d: number): number {
  return arr1.filter((a) => !arr2.some((a2) => Math.abs(a - a2) <= d)).length;
}
