import { useState } from "react";
import { Calendar, Clock, Users, Phone, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { guestOptions, timeSlots } from "@/constants/data";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const Reservations = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    specialRequests: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Reservation submitted:", formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "",
      specialRequests: "",
    });

    setOpen(false);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}

      <AlertDialog open={open} onOpenChange={setOpen}>
        <section className="py-16 lg:py-24 hero-gradient text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6 fade-in text-gold">
                Make a Reservation
              </h1>
              <p className="text-xl lg:text-2xl opacity-90 leading-relaxed slide-up">
                Reserve your perfect spot for an unforgettable dining experience
                at Brewhouse.
              </p>
            </div>
          </div>
        </section>

        {/* Reservation Form */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Form */}
                <Card className="shadow-warm">
                  <CardHeader>
                    <CardTitle className="text-2xl font-display text-primary">
                      Reservation Details
                    </CardTitle>
                    <CardDescription>
                      Fill out the form below to secure your table. We'll
                      confirm your reservation within 30 minutes.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Personal Information */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label
                            htmlFor="name"
                            className="flex items-center gap-2"
                          >
                            <User className="h-4 w-4" />
                            Full Name
                          </Label>
                          <Input
                            id="name"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={(e) =>
                              handleInputChange("name", e.target.value)
                            }
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label
                            htmlFor="email"
                            className="flex items-center gap-2"
                          >
                            <Mail className="h-4 w-4" />
                            Email
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={(e) =>
                              handleInputChange("email", e.target.value)
                            }
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="phone"
                          className="flex items-center gap-2"
                        >
                          <Phone className="h-4 w-4" />
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={(e) =>
                            handleInputChange("phone", e.target.value)
                          }
                          required
                        />
                      </div>

                      {/* Reservation Details */}
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label
                            htmlFor="date"
                            className="flex items-center gap-2"
                          >
                            <Calendar className="h-4 w-4" />
                            Date
                          </Label>
                          <Input
                            id="date"
                            type="date"
                            value={formData.date}
                            onChange={(e) =>
                              handleInputChange("date", e.target.value)
                            }
                            min={new Date().toISOString().split("T")[0]}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            Time
                          </Label>
                          <Select
                            onValueChange={(value) =>
                              handleInputChange("time", value)
                            }
                            required
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select time" />
                            </SelectTrigger>
                            <SelectContent>
                              {timeSlots.map((time) => (
                                <SelectItem key={time} value={time}>
                                  {time}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label className="flex items-center gap-2">
                            <Users className="h-4 w-4" />
                            Guests
                          </Label>
                          <Select
                            onValueChange={(value) =>
                              handleInputChange("guests", value)
                            }
                            required
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Number of guests" />
                            </SelectTrigger>
                            <SelectContent>
                              {guestOptions.map((guests) => (
                                <SelectItem key={guests} value={guests}>
                                  {guests} {guests === "1" ? "Guest" : "Guests"}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      {/* Special Requests */}
                      <div className="space-y-2">
                        <Label htmlFor="requests">
                          Special Requests (Optional)
                        </Label>
                        <Textarea
                          id="requests"
                          placeholder="Any dietary restrictions, special occasions, seating preferences, etc."
                          value={formData.specialRequests}
                          onChange={(e) =>
                            handleInputChange("specialRequests", e.target.value)
                          }
                          rows={3}
                        />
                      </div>

                      <AlertDialogTrigger className="w-full">
                        <Button
                          type="button"
                          className="w-full bg-primary hover:bg-primary-hover text-primary-foreground shadow-soft hover:shadow-warm"
                          size="lg"
                        >
                          Reserve Your Table
                        </Button>
                      </AlertDialogTrigger>
                    </form>
                  </CardContent>
                </Card>

                {/* Information Sidebar */}
                <div className="space-y-8">
                  {/* Hours */}
                  <Card className="shadow-soft">
                    <CardHeader>
                      <CardTitle className="text-xl font-display text-primary">
                        Operating Hours
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between">
                        <span className="font-medium">Monday - Friday</span>
                        <span className="text-muted-foreground">
                          7:00 AM - 11:00 PM
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Saturday</span>
                        <span className="text-muted-foreground">
                          9:00 AM - 01:00 AM
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Sunday</span>
                        <span className="text-muted-foreground">
                          9:00 AM - 01:00 AM
                        </span>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Policies */}
                  <Card className="shadow-soft">
                    <CardHeader>
                      <CardTitle className="text-xl font-display text-primary">
                        Reservation Policy
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-sm text-muted-foreground">
                      <p>
                        <strong className="text-primary">Confirmation:</strong>{" "}
                        All reservations will be confirmed via email or phone
                        within 30 minutes.
                      </p>
                      <p>
                        <strong className="text-primary">Cancellation:</strong>{" "}
                        Please give us at least 2 hours notice for
                        cancellations.
                      </p>
                      <p>
                        <strong className="text-primary">Late Arrivals:</strong>{" "}
                        Tables are held for 15 minutes past reservation time.
                      </p>
                      <p>
                        <strong className="text-primary">Large Groups:</strong>{" "}
                        Parties of 8+ may require a deposit and set menu
                        options.
                      </p>
                    </CardContent>
                  </Card>

                  {/* Contact */}
                  <Card className="shadow-soft">
                    <CardHeader>
                      <CardTitle className="text-xl font-display text-primary">
                        Need Help?
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-muted-foreground text-sm mb-4">
                        Have questions about your reservation? We're here to
                        help!
                      </p>
                      <div className="flex items-center gap-3 text-sm">
                        <Phone className="h-4 w-4 text-primary" />
                        <span>(555) 123-4567</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Mail className="h-4 w-4 text-primary" />
                        <span>hello@brewhouse.com</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm you reservation?</AlertDialogTitle>
            <AlertDialogDescription>
              Reserve <strong>{formData.name}'s</strong> table on{" "}
              <strong>{formData.date}</strong> at{" "}
              <strong>{formData.time}</strong> for{" "}
              <strong>{formData.guests}</strong>.
              {formData.specialRequests && (
                <div>{formData.specialRequests}</div>
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleSubmit}>
              Confirm
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Reservations;
