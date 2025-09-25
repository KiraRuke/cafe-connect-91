import { ArrowRight, Star, Coffee, Clock, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-cafe.jpg";
import coffeeSignature from "@/assets/coffee-signature.jpg";
import avocadoToast from "@/assets/avocado-toast.jpg";
import coldBrew from "@/assets/cold-brew.jpg";

const Home = () => {
  const featuredItems = [
    {
      name: "Signature Blend",
      description: "Our house blend with notes of chocolate and caramel",
      price: "$4.50",
      image: coffeeSignature,
    },
    {
      name: "Avocado Toast",
      description: "Multigrain bread with smashed avocado and sea salt",
      price: "$8.50",
      image: avocadoToast,
    },
    {
      name: "Cold Brew",
      description: "Smooth coffee brewed cold for 18 hours",
      price: "$4.75",
      image: coldBrew,
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "The best coffee in town! The atmosphere is perfect for both work and relaxation.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      text: "Amazing pastries and friendly staff. This place has become my daily ritual.",
      rating: 5,
    },
    {
      name: "Emma Rodriguez",
      text: "Love the cozy ambiance and sustainable practices. Highly recommend!",
      rating: 5,
    },
  ];

  const features = [
    {
      icon: Coffee,
      title: "Premium Coffee",
      description: "Ethically sourced beans roasted fresh daily",
    },
    {
      icon: Clock,
      title: "Quick Service",
      description: "Fast, friendly service without compromising quality",
    },
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every cup and dish prepared with passion and care",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Brewhouse Café Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-primary/50 to-primary/30"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center text-primary-foreground">
          <h1 className="text-5xl lg:text-7xl font-display font-bold mb-6 fade-in">
            Welcome to Brewhouse
          </h1>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed slide-up opacity-90">
            Where exceptional coffee meets community. Experience artisanal
            beverages, fresh pastries, and warm hospitality in the heart of
            downtown.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center slide-up"
            style={{ animationDelay: "200ms" }}
          >
            <Button
              asChild
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-warm hover:shadow-glow transition-all duration-300"
            >
              <Link to="/menu">
                View Our Menu
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-warm hover:shadow-glow transition-all duration-300"
            >
              <Link to="/reservations">Make Reservation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 warm-gradient">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-display font-bold text-primary mb-6">
                Why Choose Brewhouse?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We're more than just a café – we're your neighborhood gathering
                place dedicated to exceptional quality and community connection.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="text-center group hover-lift"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-primary text-primary-foreground rounded-3xl mb-6 shadow-soft group-hover:shadow-glow transition-all duration-300">
                    <feature.icon className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-display font-semibold text-primary mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu Items */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-display font-bold text-primary mb-6">
                Featured Favorites
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover our most popular items, crafted with premium
                ingredients and served with passion.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {featuredItems.map((item, index) => (
                <Card
                  key={item.name}
                  className="group overflow-hidden shadow-soft hover:shadow-warm transition-all duration-300 hover-lift"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 hero-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-display font-semibold text-primary">
                        {item.name}
                      </h3>
                      <span className="text-xl font-bold text-gold">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-soft hover:shadow-warm"
              >
                <Link to="/menu">
                  View Full Menu
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 warm-gradient">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-display font-bold text-primary mb-6">
                What Our Customers Say
              </h2>
              <p className="text-xl text-muted-foreground">
                Don't just take our word for it – hear from our amazing
                community.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={testimonial.name}
                  className="shadow-soft hover:shadow-warm transition-all duration-300 hover-lift"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-gold fill-current"
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4 italic">
                      "{testimonial.text}"
                    </p>
                    <p className="font-semibold text-primary">
                      — {testimonial.name}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              Ready for Your Perfect Cup?
            </h2>
            <p className="text-xl lg:text-2xl opacity-90 mb-8 leading-relaxed">
              Join us for an unforgettable coffee experience. Whether you're
              catching up with friends, working on your next big idea, or simply
              savoring a quiet moment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-warm hover:shadow-glow"
              >
                <Link to="/reservations">
                  Reserve Your Table
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-warm hover:shadow-glow transition-all duration-300"
              >
                <Link to="/contact">Get Directions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
