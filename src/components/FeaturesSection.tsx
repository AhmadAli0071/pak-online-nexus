import storeIcon from "@/assets/icon-store.jpg";
import educationIcon from "@/assets/icon-education.jpg";
import socialIcon from "@/assets/icon-social.jpg";
import marketplaceIcon from "@/assets/icon-marketplace.jpg";

const features = [
  {
    icon: storeIcon,
    title: "Multi‑Vendor Store",
    description: "Shop from local vendors"
  },
  {
    icon: educationIcon,
    title: "Education Hub",
    description: "Online courses & classes"
  },
  {
    icon: socialIcon,
    title: "Social Feed",
    description: "City posts & events"
  },
  {
    icon: marketplaceIcon,
    title: "Marketplace",
    description: "Buy & sell items (OLX‑style)"
  }
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon Container */}
              <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden shadow-card">
                <img 
                  src={feature.icon} 
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Feature Card */}
              <div className="bg-background rounded-2xl p-6 shadow-card hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-text-blue-dark mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-blue-gray">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}