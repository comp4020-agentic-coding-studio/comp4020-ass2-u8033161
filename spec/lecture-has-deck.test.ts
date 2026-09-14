import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

interface ApiNode {
  id: string;
  type: string;
  meta?: Record<string, unknown>;
  body?: string;
}

interface CourseApi {
  nodes: ApiNode[];
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;
const slidesPattern = /^\/decks\/([a-z0-9-]+)\/$/;

describe("course data integrity", () => {
  it("has at least one lecture linking a real deck", () => {
    const lectures = api.nodes.filter((node) => node.type === "lectures");
    const withDeck = lectures.filter((node) => {
      const slides = node.meta?.slides;
      if (typeof slides !== "string") return false;
      const match = slidesPattern.exec(slides);
      if (!match) return false;
      return existsSync(resolve("src/decks", `${match[1]}.deck.mdx`));
    });
    expect(withDeck.length, "no lecture links a deck file that actually exists").toBeGreaterThan(0);
  });
});
