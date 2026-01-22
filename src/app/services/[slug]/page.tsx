import { services } from "@/lib/data";
import { ServiceDetail } from "@/components/ServiceDetail";

interface ServicePageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.id,
    }));
}

export default async function ServicePage({ params }: ServicePageProps) {
    const { slug } = await params;
    return <ServiceDetail slug={slug} />;
}
