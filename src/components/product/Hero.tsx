
import Head from 'next/head';
import FeatureCard from '@/components/product/Card';
import { features } from '@/lib/Action/product';

export default function Product() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Next.js & Tailwind CSS App</title>
      </Head>
      <main className="container mx-auto py-16 px-4">
        <h1 className="text-3xl font-bold text-center mb-12">Features</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} title={feature.title} description={feature.description} />
          ))}
        </div>
      </main>
    </div>
  );
}
