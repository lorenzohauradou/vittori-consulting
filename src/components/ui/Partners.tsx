import Image from "next/image";
import styles from "./Partners.module.css";

const partners = [
    { name: 'Magic Box Roma', logo: 'https://vittoriconsulting.b-cdn.net/partners/logo-magic-box-roma.webp' },
    { name: 'Broker Associati', logo: 'https://vittoriconsulting.b-cdn.net/partners/broker-associati.svg' },
    { name: 'Alberto\'s Pizza', logo: 'https://vittoriconsulting.b-cdn.net/partners/albertos-pizza.webp' },
    { name: 'St. Peter Photo', logo: 'https://vittoriconsulting.b-cdn.net/partners/st-peter-photo.webp' },
    { name: 'Gelotti', logo: 'https://vittoriconsulting.b-cdn.net/partners/gelotti.webp' },
    { name: 'Passito SpA', logo: 'https://vittoriconsulting.b-cdn.net/partners/passito-spa.webp' },
    { name: 'Scavolini Store Fiumicino', logo: 'https://vittoriconsulting.b-cdn.net/partners/scavolini-store-fiumicino.webp' },
    { name: 'Caffè delle Fornaci', logo: 'https://vittoriconsulting.b-cdn.net/partners/caffefornaci.png' },
    { name: 'Il Capriccio Pizzeria', logo: 'https://vittoriconsulting.b-cdn.net/partners/capriccio.webp' },
    { name: 'Ami School', logo: 'https://vittoriconsulting.b-cdn.net/partners/amischool.webp' },
    { name: 'Summer Fest', logo: 'https://vittoriconsulting.b-cdn.net/partners/summer.webp' },
    { name: 'HeroCraft', logo: 'https://vittoriconsulting.b-cdn.net/partners/herocraft.webp' },
];

function PartnerCard({ partner }: { partner: typeof partners[0] }) {
    return (
        <div className={styles.card}>
            <Image
                src={partner.logo}
                alt={`${partner.name} - Cliente VittoriConsulting Marketing Roma`}
                width={100}
                height={100}
                sizes="100px"
                className={partner.name === 'Scavolini Store Fiumicino' ? styles.logoLarge : styles.logo}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
            />
        </div>
    );
}

export default function Partners() {
    return (
        <section className="py-10 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                        HANNO SCELTO VITTORI CONSULTING
                    </h2>
                </div>

                <div className={styles.marqueeContainer}>
                    <div className={styles.marqueeTrack}>
                        {[...partners, ...partners].map((partner, index) => (
                            <PartnerCard key={index} partner={partner} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
