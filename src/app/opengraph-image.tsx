import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "גרוסמן פיגומים";
export const size = { width: 1080, height: 1080 };
export const contentType = "image/png";

function visualHebrew(text: string) {
  return [...text].reverse().join("");
}

export default async function OpenGraphImage() {
  const font = await readFile(join(process.cwd(), "src/app/fonts/Heebo-ExtraBold.ttf"));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#101010",
        }}
      >
        <svg width="300" height="300" viewBox="0 0 48 48" fill="none">
          <path d="M8 12h20M8 22h20M8 32h20" stroke="#F5C400" strokeWidth="1.7" />
          <path d="M8 8v28M18 8v28M28 8v28" stroke="#F5C400" strokeWidth="1.7" />
          <path d="M28 12l10-5M28 22l10-5M28 32l10-5" stroke="#F5C400" strokeWidth="1.7" />
          <path d="M38 7v28" stroke="#F5C400" strokeWidth="1.7" />
          <path d="M8 8l10-5h20" stroke="#F5C400" strokeWidth="1.7" />
        </svg>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 28,
            fontFamily: "Heebo",
          }}
        >
          <div style={{ color: "#F5C400", fontSize: 96, lineHeight: 1 }}>{visualHebrew("גרוסמן")}</div>
          <div style={{ color: "#F7F7F5", fontSize: 78, lineHeight: 1.15, marginTop: 8 }}>{visualHebrew("פיגומים")}</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Heebo", data: font, weight: 800, style: "normal" }],
    },
  );
}
