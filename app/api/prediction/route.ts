import { NextResponse } from "next/server";

const predictionKey = process.env.PREDICTION_KEY;
const predictionEndpoint = process.env.PREDICTION_ENDPOINT;
const projectId = process.env.PROJECT_ID;
const modelName = process.env.MODEL_NAME;

interface Prediction {
  tagName: string;
  probability: number;
  tagId: string;
}

export async function POST(request: Request) {
  try {
    const { imageUrl } = await request.json();

    if (!predictionKey || !predictionEndpoint || !projectId || !modelName) {
      return NextResponse.json(
        { message: "환경 변수가 올바르게 설정되지 않았습니다." },
        { status: 500 }
      );
    }

    const response = await fetch(imageUrl);
    const blob = await response.blob();

    const headers = {
      "Prediction-Key": predictionKey,
      "Content-Type": "application/octet-stream",
    };

    const apiUrl = `${predictionEndpoint}/customvision/v3.0/Prediction/${projectId}/classify/iterations/${modelName}/image`;

    const predictionResponse = await fetch(apiUrl, {
      method: "POST",
      headers: headers,
      body: blob,
    });

    if (!predictionResponse.ok) {
      return NextResponse.json(
        { message: "API 호출 실패" },
        { status: predictionResponse.status }
      );
    }

    const result = await predictionResponse.json();
    const predictions = result.predictions.reduce(
      (acc: Record<string, number>, pred: Prediction) => {
        acc[pred.tagName] = pred.probability * 100;
        return acc;
      },
      {}
    );

    return NextResponse.json(predictions);
  } catch (error) {
    return NextResponse.json(
      {
        message:
          error instanceof Error ? error.message : "서버 오류가 발생했습니다.",
      },
      { status: 500 }
    );
  }
}
