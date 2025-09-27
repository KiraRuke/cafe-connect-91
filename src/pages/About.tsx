import { values } from "@/constants/data";

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 warm-gradient">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-primary mb-6 fade-in">
              Our Story
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed slide-up">
              Born from a passion for exceptional coffee and community
              connection, Brewhouse has been serving our neighborhood with love
              since 2018.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-display font-semibold text-primary">
                  Where It All Began
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    What started as a dream to create the perfect neighborhood
                    café has grown into something truly special. Our founders,
                    Sarah and Michael, traveled the world discovering unique
                    coffee cultures and brewing techniques.
                  </p>
                  <p>
                    They brought those experiences home, combining traditional
                    methods with modern innovation to create a space where every
                    cup tells a story and every visit feels like coming home.
                  </p>
                  <p>
                    Today, we're proud to be more than just a coffee shop –
                    we're a community hub where creativity flows as freely as
                    our hand-crafted beverages.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl shadow-warm">
                  <img
                    src="/placeholder.svg"
                    alt="Café founders"
                    className="w-full h-96 lg:h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 hero-gradient opacity-10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-20 warm-gradient">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-display font-semibold text-primary mb-6">
                What Drives Us
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our values guide everything we do, from the beans we choose to
                the relationships we build.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="text-center group hover-lift"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-2xl mb-6 shadow-soft group-hover:shadow-glow transition-all duration-300">
                    <value.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-primary mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-display font-semibold text-primary mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground mb-16 max-w-3xl mx-auto">
              The passionate people behind every perfect cup and warm welcome.
            </p>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {[
                {
                  name: "Sarah Johnson",
                  role: "Co-Founder & Head Roaster",
                  bio: "Coffee enthusiast with 15+ years experience in specialty coffee.",
                },
                {
                  name: "Michael Chen",
                  role: "Co-Founder & Chef",
                  bio: "Culinary artist creating perfect pairings for our coffee selections.",
                },
                {
                  name: "Emma Rodriguez",
                  role: "Head Barista",
                  bio: "Award-winning barista champion and latte art specialist.",
                },
              ].map((member, index) => (
                <div key={member.name} className="group hover-lift">
                  <div className="relative overflow-hidden rounded-2xl mb-6 shadow-soft group-hover:shadow-warm transition-all duration-300">
                    <img
                      src="/placeholder.svg"
                      alt={member.name}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 hero-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-xl font-display font-semibold text-primary mb-2">
                    {member.name}
                  </h3>
                  <p className="text-gold font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
