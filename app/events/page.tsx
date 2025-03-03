import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardFooter, CardHeader } from "@/components/ui/card"
import { SectionHeading } from "@/components/section-heading"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Search, Share2, Star } from "lucide-react"

export default function Events() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[500px]">
        <Image
          src="eventPage.jpg?height=500&width=1200"
          fill
          alt="Community Cleanup"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center">
          <div className="container px-4 md:px-6 text-white">
            <div className="max-w-2xl space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Community Cleanup: Your Hands, Our Future
              </h1>
              <p className="text-lg text-white/90">
                Join us in making our community cleaner and brighter. Your hands can change the future. Volunteer for a
                community cleanup today!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="w-full py-8 md:py-12 bg-muted/30">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-6">Discover Events</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <Button variant="outline" className="flex items-center gap-2 justify-start">
              <MapPin className="h-4 w-4" />
              <span>My Radius</span>
            </Button>
            <Button variant="outline" className="flex items-center gap-2 justify-start">
              <Calendar className="h-4 w-4" />
              <span>Any Date</span>
            </Button>
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search events..." className="pl-10" />
            </div>
            <Button>Search</Button>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="w-full py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <Link href={`/events/${i + 1}`}>
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    width={300}
                    height={200}
                    alt={`Event ${i + 1}`}
                    className="w-full h-48 object-cover"
                  />
                </Link>
                <CardHeader className="p-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                      9 SEP 2023
                    </Badge>
                  </div>
                  <Link href={`/events/${i + 1}`} className="font-bold hover:text-primary transition-colors">
                    {["SUN HOUSE SECT", "DAY PUBLIC SCHOOL", "NALANDA BOYS HOSTEL", "NEAR NIET COLLEGE"][i % 4]}
                  </Link>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>21 INTERESTED • 2 GOING</span>
                  </div>
                </CardHeader>
                <CardFooter className="p-4 pt-0 flex justify-between">
                  <Button variant="outline" size="sm" className="gap-1">
                    <Star className="h-4 w-4" />
                    <span>Interested</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="rounded-full p-0 w-8 h-8">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Section */}
      <section className="w-full py-16 md:py-24 bg-grid">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="relative order-2 lg:order-1">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  width={600}
                  height={500}
                  alt="Learn With Experts"
                  className="rounded-2xl object-cover"
                />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <Badge variant="outline" className="py-1.5 px-4 text-sm text-primary border-primary">
                Expert Knowledge
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Learn With <span className="text-gradient">Experts</span>
              </h2>
              <p className="text-muted-foreground md:text-xl">
                At EcoEngage, we believe in the power of collaboration to drive positive change. Join our workshops and
                seminars led by sustainability experts.
              </p>
              <ul className="grid gap-4 py-4">
                <li className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <span className="font-medium">Regular workshops and webinars</span>
                    <p className="text-sm text-muted-foreground">Learn practical skills from industry experts</p>
                  </div>
                </li>
                <li className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Star className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <span className="font-medium">Certification programs</span>
                    <p className="text-sm text-muted-foreground">Get recognized for your sustainability knowledge</p>
                  </div>
                </li>
              </ul>
              <Button  className="rounded-full px-8 py-6 text-base font-medium" asChild>
                <Link href="/events/workshops">View Upcoming Workshops</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="w-full py-16 md:py-24 bg-primary/5">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="Our Impact So Far"
            description="Together, we're making a measurable difference in our communities"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {[
              { number: "120+", label: "Events Completed" },
              { number: "5,000+", label: "Volunteers Engaged" },
              { number: "25 Tons", label: "Waste Collected" },
              { number: "15 Tons", label: "Waste Recycled" },
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-lg text-center card-hover">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-16 md:py-24 bg-dots">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="What Participants Say"
            description="Hear from people who have participated in our community events"
            badge="Testimonials"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                name: "Amit Kumar",
                role: "Regular Volunteer",
                quote:
                  "Being part of EcoEngage events has given me a sense of purpose. It's amazing to see how our small actions collectively make a huge impact.",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                name: "Meera Patel",
                role: "First-time Participant",
                quote:
                  "I was nervous about my first cleanup event, but the community was so welcoming. Now I'm hooked and can't wait for the next one!",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                name: "Rajesh Singh",
                role: "Event Organizer",
                quote:
                  "The platform makes it incredibly easy to organize and promote environmental events. We've seen participation increase by 200% since using EcoEngage.",
                image: "/placeholder.svg?height=100&width=100",
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-lg card-hover">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-primary/20">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="italic text-muted-foreground">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

