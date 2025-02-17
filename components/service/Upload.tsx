"use client";
import { Button } from "@/components/ui/button";
import { UploadCloud } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useDropzone } from "react-dropzone";

function Upload() {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const onDrop = () => {};

  const handleReupload = () => {};

  const onSubmit = async () => {};

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png"],
    },
    multiple: false,
  });

  return (
    <div className="flex flex-col items-center w-[60%]">
      {previewUrl ? (
        <div className="flex flex-col items-center">
          <div className="mt-4">
            <Image
              src={previewUrl}
              alt="업로드된 이미지"
              width={600}
              height={600}
              className="w-auto h-auto object-contain"
              priority
            />
          </div>
          <div className="flex gap-4 mt-4">
            <Button onClick={onSubmit}>판별하기</Button>
            <Button variant="outline" onClick={handleReupload}>
              취소
            </Button>
          </div>
        </div>
      ) : (
        <div
          {...getRootProps()}
          className={`flex flex-col items-center border-2 border-dashed rounded-lg p-6 w-full cursor-pointer
            ${isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"}
            `}
        >
          <input {...getInputProps()} />
          <UploadCloud className="w-12 h-12 text-gray-400" />
          <p className="text-gray-500">
            {"이미지를 드래그하거나 클릭하여 업로드"}
          </p>
        </div>
      )}
    </div>
  );
}

export default Upload;
