import { describe, expect, it } from "vitest";
import {
  getAllProjectSlugs,
  getProjectBySlug,
} from "@/constants/projects/index";

describe("getAllProjectSlugs", () => {
  it("returns six non-empty, unique slugs", () => {
    const slugs = getAllProjectSlugs();
    expect(slugs).toHaveLength(6);
    for (const slug of slugs) {
      expect(slug).toBeTruthy();
    }
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});

describe("getProjectBySlug", () => {
  it("resolves every slug to a project with matching slug, title, and media", () => {
    const slugs = getAllProjectSlugs();
    for (const slug of slugs) {
      const project = getProjectBySlug(slug);
      expect(project).toBeDefined();
      expect(project!.slug).toBe(slug);
      expect(project!.title).toBeTruthy();
      expect(project!.media.length).toBeGreaterThan(0);
    }
  });

  it("returns undefined for an unknown slug", () => {
    expect(getProjectBySlug("nonexistent-project")).toBeUndefined();
  });
});
