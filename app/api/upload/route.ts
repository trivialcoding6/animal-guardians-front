import { BlobServiceClient } from "@azure/storage-blob";
import { NextResponse } from "next/server";

const blobServiceClient = BlobServiceClient.fromConnectionString(
  process.env.AZURE_STORAGE_CONNECTION_STRING || ""
);
const containerName = process.env.AZURE_STORAGE_CONTAINER_NAME;
const containerClient = blobServiceClient.getContainerClient(containerName!);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("image") as File;

    // 허용된 파일 형식 검사
    const allowedTypes = ["image/jpeg", "image/png"];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: "JPG, PNG 형식만 업로드 가능합니다." },
        { status: 400 }
      );
    }

    // 고유한 파일명 생성
    const timestamp = new Date().getTime();
    const randomString = Math.random().toString(36).substring(2, 15);
    const extension = file.name.split(".").pop();
    const fileName = `${timestamp}-${randomString}.${extension}`;

    // Blob 클라이언트 생성
    const blockBlobClient = containerClient.getBlockBlobClient(fileName);
    // 파일을 버퍼로 변환
    const buffer = await file.arrayBuffer();

    // Blob Storage에 업로드
    await blockBlobClient.uploadData(buffer, {
      blobHTTPHeaders: {
        blobContentType: file.type,
      },
    });

    // 24시간 후 만료 시간을 메타데이터로 설정
    await blockBlobClient.setMetadata({
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
    });

    return NextResponse.json({
      imageUrl: blockBlobClient.url,
      message:
        "이미지가 성공적으로 업로드되었습니다. 이미지는 24시간 후 자동으로 삭제됩니다.",
    });
  } catch (error) {
    console.error("업로드 중 오류 발생:", error);
    return NextResponse.json(
      { error: "이미지 업로드에 실패했습니다." },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { imageUrl } = await request.json();

    // Blob URL에서 파일 이름 추출
    const blobUrlParts = imageUrl.split("/");
    const fileName = blobUrlParts[blobUrlParts.length - 1];

    // Azure Blob Storage에서 파일 삭제
    const blockBlobClient = containerClient.getBlockBlobClient(fileName);
    await blockBlobClient.delete();

    return NextResponse.json({
      message: "이미지가 성공적으로 삭제되었습니다.",
    });
  } catch (error) {
    console.error("이미지 삭제 중 오류 발생:", error);
    return NextResponse.json(
      { error: "이미지 삭제에 실패했습니다." },
      { status: 500 }
    );
  }
}
