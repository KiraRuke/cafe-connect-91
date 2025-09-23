import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Instagram, Facebook, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Coffee Street', 'Downtown District', 'City, State 12345'],
      link: 'https://maps.google.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['(555) 123-4567', 'Available during business hours'],
      link: 'tel:+15551234567'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['hello@brewhouse.com', 'We respond within 24 hours'],
      link: 'mailto:hello@brewhouse.com'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon-Fri: 7:00 AM - 8:00 PM', 'Sat: 8:00 AM - 9:00 PM', 'Sun: 8:00 AM - 7:00 PM'],
      link: null
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6 fade-in">
              Get in Touch
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 leading-relaxed slide-up">
              We'd love to hear from you. Visit us, call us, or send us a message – we're always here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <Card key={info.title} className="text-center shadow-soft hover:shadow-warm transition-all duration-300 hover-lift">
                  <CardContent className="pt-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-2xl mb-6 shadow-soft">
                      <info.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-display font-semibold text-primary mb-4">
                      {info.title}
                    </h3>
                    <div className="space-y-2">
                      {info.details.map((detail, i) => (
                        <p key={i} className={`${i === 0 ? 'font-medium text-foreground' : 'text-muted-foreground text-sm'}`}>
                          {info.link && i === 0 ? (
                            <a 
                              href={info.link} 
                              className="hover:text-primary transition-colors"
                              target={info.link.startsWith('http') ? '_blank' : undefined}
                              rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            >
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="shadow-warm">
                <CardHeader>
                  <CardTitle className="text-2xl font-display text-primary">
                    Send Us a Message
                  </CardTitle>
                  <CardDescription>
                    Have a question, suggestion, or just want to say hello? We'd love to hear from you.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Your email address"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        placeholder="What's this about?"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about how we can help you..."
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        rows={5}
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary-hover text-primary-foreground shadow-soft hover:shadow-warm"
                      size="lg"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Map and Additional Info */}
              <div className="space-y-8">
                {/* Map Placeholder */}
                <Card className="shadow-soft">
                  <CardContent className="p-0">
                    <div className="h-64 bg-muted rounded-t-lg relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <div className="text-center">
                          <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                          <p className="text-primary font-medium">Interactive Map</p>
                          <p className="text-muted-foreground text-sm">Click to view in Google Maps</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-display font-semibold text-primary mb-2">Find Us</h3>
                      <p className="text-muted-foreground">
                        Located in the heart of downtown, we're easily accessible by public transport and have street parking available.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Media */}
                <Card className="shadow-soft">
                  <CardHeader>
                    <CardTitle className="text-xl font-display text-primary">
                      Follow Us
                    </CardTitle>
                    <CardDescription>
                      Stay connected with us on social media for the latest updates, events, and behind-the-scenes content.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-4">
                      {socialLinks.map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-xl hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-105"
                          aria-label={social.label}
                        >
                          <social.icon className="h-5 w-5" />
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Newsletter */}
                <Card className="shadow-soft accent-gradient text-accent-foreground">
                  <CardHeader>
                    <CardTitle className="text-xl font-display">
                      Stay Updated
                    </CardTitle>
                    <CardDescription className="text-accent-foreground/80">
                      Subscribe to our newsletter for special offers, events, and coffee tips.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-2">
                      <Input 
                        placeholder="Enter your email" 
                        className="bg-background/20 border-accent-foreground/20 text-accent-foreground placeholder:text-accent-foreground/60"
                      />
                      <Button 
                        className="bg-accent-foreground text-accent hover:bg-accent-foreground/90"
                      >
                        Subscribe
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;