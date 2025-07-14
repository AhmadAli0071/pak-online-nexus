const steps = [
  {
    number: "1",
    title: "Sign Up",
    description: "Create your account in minutes"
  },
  {
    number: "2", 
    title: "Explore",
    description: "Browse stores, courses, and community"
  },
  {
    number: "3",
    title: "Connect",
    description: "Start shopping, learning, and engaging"
  }
];

export function HowItWorksSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-accent">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-text-blue-dark mb-4">
            How It Works
          </h2>
          <p className="text-xl text-text-blue-gray max-w-2xl mx-auto">
            Getting started with Pakistan Online is simple and straightforward
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Number Badge */}
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-button">
                {step.number}
              </div>
              
              {/* Step Content */}
              <h3 className="text-2xl font-semibold text-text-blue-dark mb-3">
                {step.title}
              </h3>
              <p className="text-text-blue-gray text-lg">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}