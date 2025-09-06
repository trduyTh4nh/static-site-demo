import { client } from "@/lib/sanity";
import { aboutQuery } from "@/lib/queries";
import { About } from "@/types";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function AboutPage() {
  const about = await client.fetch<About>(aboutQuery);

  // Nếu không có dữ liệu about, hiển thị fallback UI
  if (!about) {
    return (
      <main className="pt-20">
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-8 text-gray-800">
                About Us
              </h1>
              <p className="text-gray-600 mb-8">
                No information available at the moment.
              </p>
              <Button asChild>
                <Link href="/">Return Home</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="pt-20">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
              {about.title}
            </h1>

            {about.image && (
              <div className="relative h-96 mb-12 rounded-lg overflow-hidden">
                <Image
                  src={urlFor(about.image) || "/images/placeholder.jpg"}
                  alt={about.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">{about.content}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
