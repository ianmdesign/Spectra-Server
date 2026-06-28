import semver from "semver";

export function isCompatibleVersion(version: string): boolean {
  return semver.satisfies(version, `>=0.3.9 <0.3.25`);
}
