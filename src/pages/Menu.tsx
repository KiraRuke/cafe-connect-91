import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { categories, menuItems } from "@/constants/data";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("coffee");

  const getTagColor = (tag: string) => {
    const colors: { [key: string]: string } = {
      Popular: "bg-gold text-gold-foreground",
      "House Blend": "bg-primary text-primary-foreground",
      "Single Origin": "bg-accent text-accent-foreground",
      Healthy: "bg-accent text-accent-foreground",
      Vegan: "bg-accent hover:bg-accent-hover text-accent-foreground",
      "Gluten-Free": "bg-secondary text-secondary-foreground",
      Fresh: "bg-secondary text-secondary-foreground",
    };
    return colors[tag] || "bg-muted text-muted-foreground";
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6 fade-in text-gold">
              Our Menu
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 leading-relaxed slide-up">
              Carefully crafted beverages and artisanal food made with love and
              the finest ingredients.
            </p>
          </div>
        </div>
      </section>

      {/* Menu Navigation */}
      <section className="py-8 bg-background sticky top-16 lg:top-20 z-40 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex justify-center">
            <div className="flex flex-wrap gap-4 bg-secondary/50 p-2 rounded-2xl">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                    activeCategory === category.id
                      ? "bg-primary text-primary-foreground shadow-soft"
                      : "text-muted-foreground hover:text-primary hover:bg-background/50"
                  }`}
                >
                  <category.icon className="h-5 w-5" />
                  <span className="hidden sm:inline">{category.name}</span>
                  <span className="sm:hidden">
                    {category.name.split(" ")[0]}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuItems[activeCategory as keyof typeof menuItems].map(
                (item, index) => (
                  <div
                    key={item.name}
                    className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-warm transition-all duration-300 hover-lift"
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

                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-display font-semibold text-primary group-hover:text-primary-hover transition-colors">
                          {item.name}
                        </h3>
                        <span className="text-xl font-bold text-gold">
                          {item.price}
                        </span>
                      </div>

                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.tags.map((tag) => (
                          <Badge
                            key={tag}
                            className={`${getTagColor(tag)} text-xs`}
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <Button
                        variant="outline"
                        className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        Add to Order
                      </Button>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 warm-gradient">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-display font-semibold text-primary mb-6">
              Ready to Order?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Experience our carefully crafted menu items made fresh daily with
              premium ingredients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-soft hover:shadow-warm"
              >
                Order Online
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Make Reservation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
