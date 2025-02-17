import Header from "@/components/service/Header";
import RecommendSection from "@/components/service/RecommendSection";
import ResultSection from "@/components/service/ResultSection";
import UploadSection from "@/components/service/UploadSection";

function Upload() {
  return (
    <div className="space-y-10">
      <Header />
      <UploadSection />
      <ResultSection />
      <RecommendSection />
    </div>
  );
}

export default Upload;
