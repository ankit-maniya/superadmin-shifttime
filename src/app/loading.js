import Image from "next/image";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="relative flex justify-center items-center h-screen">
      <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
      <Image src="/images/ShiftTimeIcon.png" width="100" height="100" className="rounded-full h-28 w-28" alt="shifttime logo"/>
    </div>
  );
}