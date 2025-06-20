import { getProductById } from "@/lib/api";
import { ImageResponse } from "@vercel/og";
import type { NextRequest } from "next/server";

export const config = { runtime: "edge" };

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const product = await getProductById(id);

  const title = product?.title ?? "Product";
  const imageUrl = product?.image ?? "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
          fontSize: 64,
          fontFamily: "sans-serif",
        }}
      >
        {imageUrl && (
          <img
            src={imageUrl}
            alt={title}
            width={400}
            height={400}
            style={{ borderRadius: "16px" }}
          />
        )}
        <p
          style={{ marginTop: "20px", padding: "0 40px", textAlign: "center" }}
        >
          {title}
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
