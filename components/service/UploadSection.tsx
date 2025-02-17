import Section from "./Section";
import Upload from "./Upload";

function UploadSection() {
  return (
    <Section className="flex flex-col items-center p-6 w-full bg-white gap-6">
      <p className="text-2xl font-bold">반려견 사진을 업로드 해주세요.</p>
      <Upload />
    </Section>
  );
}

export default UploadSection;
