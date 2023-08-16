import { paddle } from "@/paddle";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Behold, my paddle",
  description: "This is all the platypi in my paddle.",
};

export default function PaddlePage() {
  return (
    <div>
      <h2>Paddle Page</h2>
      <div className="grid grid-cols-2 py-16">
        {paddle.map((platypus) => {
          return (
            <div key={platypus.slug} className="py-4 pl-4">
              <h3>
                <Link href={`/paddle/${platypus.slug}`}>{platypus.name}</Link>
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
