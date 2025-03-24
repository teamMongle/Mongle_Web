import { RuleSet } from "styled-components";
import { implementText } from "@designsystem/foundation/text/TextProperties";
import { CSSProperties } from "react";

export type FontFamily = "Pretendard";

export const fontFamilyList: FontFamily[] = ["Pretendard"];

export type TextType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "b1"
  | "b2"
  | "button"
  | "caption";

export const textTypes: TextType[] = [
  "h1",
  "h2",
  "h3",
  "h4",
  "b1",
  "b2",
  "button",
  "caption",
];

export const textTypeMap: Record<
  TextType,
  {
    fontFamily: FontFamily;
    fontWeight: CSSProperties["fontWeight"];
    boldFontWeight: CSSProperties["fontWeight"];
    fontSize: number;
    lineHeight: CSSProperties["lineHeight"];
  }
> = Object.freeze({
  h1: {
    fontFamily: "Pretendard",
    fontWeight: 500,
    boldFontWeight: 800,
    fontSize: 32,
    lineHeight: "130%",
  },
  h2: {
    fontFamily: "Pretendard",
    fontWeight: 500,
    boldFontWeight: 800,
    fontSize: 28,
    lineHeight: "130%",
  },
  h3: {
    fontFamily: "Pretendard",
    fontWeight: 500,
    boldFontWeight: 800,
    fontSize: 24,
    lineHeight: "140%",
  },
  h4: {
    fontFamily: "Pretendard",
    fontWeight: 500,
    boldFontWeight: 800,
    fontSize: 20,
    lineHeight: "140%",
  },
  b1: {
    fontFamily: "Pretendard",
    fontWeight: 500,
    boldFontWeight: 700,
    fontSize: 18,
    lineHeight: "150%",
  },
  b2: {
    fontFamily: "Pretendard",
    fontWeight: 500,
    boldFontWeight: 700,
    fontSize: 16,
    lineHeight: "150%",
  },
  button: {
    fontFamily: "Pretendard",
    fontWeight: 400,
    boldFontWeight: 600,
    fontSize: 14,
    lineHeight: "150%",
  },
  caption: {
    fontFamily: "Pretendard",
    fontWeight: 400,
    boldFontWeight: 600,
    fontSize: 12,
    lineHeight: "150%",
  },
});

export default function makeText(
  text: TextType,
  bold: boolean = false
): RuleSet {
  const properties = textTypeMap[text];
  return implementText({
    fontFamily: properties.fontFamily,
    fontWeight: bold ? properties.boldFontWeight : properties.fontWeight,
    fontSize: properties.fontSize,
    lineHeight: properties.lineHeight,
  });
}
