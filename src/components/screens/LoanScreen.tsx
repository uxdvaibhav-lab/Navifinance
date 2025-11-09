import { Banknote, FileCheck, Zap, Calendar, Award, ChevronRight, MessageCircle, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import testimonialAvatar from "@/assets/testimonial-avatar.jpg";
import testimonialAvatar2 from "@/assets/testimonial-avatar-2.jpg";
import testimonialAvatar3 from "@/assets/testimonial-avatar-3.jpg";
import testimonialAvatar4 from "@/assets/testimonial-avatar-4.jpg";

export default function LoanScreen() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      date: "March 15, 2025",
      image: testimonialAvatar,
      rating: 5,
      text: "Easily loan available, best app and low interest. Quick approval and transparent process made it hassle-free."
    },
    {
      name: "Priya Sharma",
      date: "February 28, 2025",
      image: testimonialAvatar2,
      rating: 5,
      text: "The entire process was smooth and professional. Got my loan approved within hours. Highly recommended!"
    },
    {
      name: "Anil Patel",
      date: "March 8, 2025",
      image: testimonialAvatar3,
      rating: 5,
      text: "Zero paperwork and instant disbursement. Best rates in the market. Very satisfied with the service."
    },
    {
      name: "Vikram Singh",
      date: "March 12, 2025",
      image: testimonialAvatar4,
      rating: 5,
      text: "Transparent terms and excellent customer support. The flexible EMI options helped me manage my finances better."
    }
  ];

  return (
    <div className="px-4 pt-4 pb-24 section-spacing">
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .animate-fade-slide-up {
            animation: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>
      
      {/* Main Offer Banner */}
      <div 
        className="bg-gradient-to-br from-primary to-primary-structural rounded-2xl ring-1 ring-primary/50 p-6 text-white animate-fade-slide-up opacity-0"
        style={{ animationDelay: '0ms' }}
      >
        <div className="section-spacing">
          <div>
            <p className="gradient-label">Get instant cash up to</p>
            <h2 className="text-3xl font-light tracking-tight text-white mt-2">₹20,00,000</h2>
          </div>
          <Button className="w-full bg-white text-primary hover:bg-white/95 icon-text-gap">
            <span>Get cash</span>
            <ChevronRight className="icon-sm ml-auto" strokeWidth={1.5} />
          </Button>
        </div>
      </div>

      {/* Features Card */}
      <div 
        className="bg-card rounded-2xl ring-1 ring-border card-padding section-spacing animate-fade-slide-up opacity-0"
        style={{ animationDelay: '50ms' }}
      >
        <h2 className="text-lg font-light tracking-tight text-foreground">Why choose Navi Loan?</h2>
        <div className="grid grid-cols-2 card-gap">
          {[
            { icon: FileCheck, label: "100% paperless" },
            { icon: Zap, label: "Instant transfer" },
            { icon: Calendar, label: "Pick EMI date" },
            { icon: Award, label: "Zero fees" },
          ].map((feature) => (
            <div
              key={feature.label}
              className="flex flex-col items-center icon-text-gap p-3 rounded-xl bg-muted ring-1 ring-border"
            >
              <feature.icon className="icon-lg text-primary" strokeWidth={1.5} />
              <span className="text-xs font-medium text-center text-foreground">{feature.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Trust & Social Proof */}
      <div 
        className="bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl ring-1 ring-primary/30 card-padding section-spacing animate-fade-slide-up opacity-0"
        style={{ animationDelay: '100ms' }}
      >
        <h3 className="text-lg font-light tracking-tight text-foreground">Trusted by millions</h3>
        <div className="space-y-3">
          <div className="flex items-center card-gap">
            <Banknote className="icon-lg text-primary" strokeWidth={1.5} />
            <div>
              <p className="text-xl font-semibold text-foreground">₹25,000 Cr+</p>
              <p className="text-xs text-muted-foreground">Disbursed</p>
            </div>
          </div>
          <div className="flex items-center card-gap">
            <Users className="icon-lg text-primary" strokeWidth={1.5} />
            <div>
              <p className="text-xl font-semibold text-foreground">30 Lakh+</p>
              <p className="text-xs text-muted-foreground">Happy customers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Carousel */}
      <div 
        className="bg-card rounded-2xl ring-1 ring-border card-padding animate-fade-slide-up opacity-0"
        style={{ animationDelay: '150ms' }}
      >
        <h2 className="text-lg font-light tracking-tight text-foreground mb-4">What our customers say</h2>
        <Carousel className="w-full" opts={{ align: "start", loop: true }}>
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 basis-[90%]">
                <div className="flex flex-col section-gap py-4 pr-4 border-r border-border/50">
                  <div className="flex items-center card-gap">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.date}</p>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="icon-xs fill-warning text-warning" strokeWidth={1.5} />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-foreground leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* FAQ & Support */}
      <div 
        className="bg-card rounded-2xl ring-1 ring-border card-padding space-y-3 animate-fade-slide-up opacity-0"
        style={{ animationDelay: '200ms' }}
      >
        <h3 className="text-base font-semibold text-foreground">Need help?</h3>
        <Button variant="outline" className="w-full justify-start icon-text-gap">
          <FileCheck className="icon-sm" strokeWidth={1.5} />
          <span>FAQs</span>
        </Button>
        <Button variant="outline" className="w-full justify-start icon-text-gap">
          <MessageCircle className="icon-sm" strokeWidth={1.5} />
          <span>Chat with us</span>
        </Button>
      </div>
    </div>
  );
}
