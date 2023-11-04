import Card from "@/components/core/card";

const MemoBlocks = () => {
  return (
    <div className="w-full h-full flex justify-center bg-indigo-400">
      <div className="mt-40 flex gap-10">
        <Card title="ABC" subTitle="La la la" color="primary" />
        <Card title="ABC" subTitle="La la la" color="primary" />
        <Card title="ABC" subTitle="La la la" color="primary" />
      </div>
    </div>
  );
};

export default MemoBlocks;
