import Link from "next/link"
import Image from "next/image"
import { Button } from "components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "components/ui/card"
import { Badge } from "components/ui/badge"
import { ArrowRight, Calendar, MapPin, Recycle, Trash2, Users } from "lucide-react"

export default function Home() {
  const events = [
    {
      date: "9 SEP 2023",
      location: "DAY PUBLIC SCHOOL",
      title: "Community Cleanup Drive",
      stats: "21 INTERESTED • 2 GOING",
      image: "/topEvent1.jpg?height=200&width=400",
    },
    {
      date: "12 SEP 2023",
      location: "NALANDA BOYS HOSTEL",
      title: "Recycling Workshop",
      stats: "15 INTERESTED • 5 GOING",
      image: "/topEvent2.jpg?height=200&width=400",
    },
    {
      date: "15 SEP 2023",
      location: "NEAR NIET COLLEGE",
      title: "Waste Management Seminar",
      stats: "32 INTERESTED • 8 GOING",
      image: "/topEvent3.jpg?height=200&width=400",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 hero-pattern">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Join the Movement
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Join the Waste Warriors: Clean, Compete, Contribute!
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Compete with neighbors, earn points, and make a real impact on your community's cleanliness and
                sustainability.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" asChild>
                  <Link href="/join-us">Join Us</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/learn-more">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/homePage.jpg?height=400&width=500"
                width={500}
                height={400}
                alt="Waste Warriors"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge variant="outline" className="border-primary text-primary">
                Upcoming Events
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Discover our top-rated events
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Showcasing the best in waste management and sustainability. Join the movement!
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-3 gap-6 py-12">
            {events.map((event,i) => (
              <Card key={i} className="overflow-hidden">
                <Image
                  src={event.image}
                  width={400}
                  height={200}
                  alt={`Event ${i}`}
                  className="w-full object-cover h-48"
                />
                <CardHeader className="p-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                  <CardTitle className="text-lg">{event.location}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{event.stats}</span>
                  </div>
                </CardHeader>
                <CardFooter className="p-4 pt-0 flex justify-between">
                  <Button variant="outline" size="sm">
                    Interested
                  </Button>
                  <Button variant="ghost" size="sm" className="rounded-full p-0 w-8 h-8">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="flex justify-center">
            <Button variant="outline" asChild>
              <Link href="/events">View More Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Latest from our Blog</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover tips, stories, and insights about sustainable living and waste management.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-3 gap-6 py-12">
            <Card>
              <Image
                src="blog1.jpg?height=200&width=400"
                width={400}
                height={200}
                alt="The Art of Recycling"
                className="w-full object-cover h-48"
              />
              <CardHeader>
                <CardTitle>The Art of Recycling</CardTitle>
                <CardDescription>
                  Discover the creative world of upcycling and how everyday items can find new life as unique treasures.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="link" className="p-0" asChild>
                  <Link href="/blog/art-of-recycling">Read More</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <Image
                src="/blog2.jpg?height=200&width=400"
                width={400}
                height={200}
                alt="Waste Reduction Hacks"
                className="w-full object-cover h-48"
              />
              <CardHeader>
                <CardTitle>Waste Reduction Hacks</CardTitle>
                <CardDescription>
                  Explore practical waste reduction tips that make a significant difference in your environmental
                  footprint.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="link" className="p-0" asChild>
                  <Link href="/blog/waste-reduction-hacks">Read More</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <Image
                src="blog3.jpg?height=200&width=400"
                width={400}
                height={200}
                alt="From Trash to Garden"
                className="w-full object-cover h-48"
              />
              <CardHeader>
                <CardTitle>From Trash to Garden</CardTitle>
                <CardDescription>
                  Unearth the secrets of composting and how turning kitchen scraps into nutrient-rich soil can transform
                  your gardening experience.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="link" className="p-0" asChild>
                  <Link href="/blog/trash-to-garden">Read More</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Mission</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Making sustainability accessible to everyone
              </h2>

              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                At EcoEngage, we believe in the power of community action to create lasting environmental change. Our
                platform connects eco-warriors and provides tools for sustainable living.
              </p>
              <ul className="grid gap-2 py-4">
                <li className="flex items-center gap-2">
                  <Recycle className="h-5 w-5 text-primary" />
                  <span>Marketplace for recycled and upcycled products</span>
                </li>
                <li className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span>Community-driven cleanup events</span>
                </li>
                <li className="flex items-center gap-2">
                  <Trash2 className="h-5 w-5 text-primary" />
                  <span>Educational resources on waste management</span>
                </li>
              </ul>
              <Button asChild>
                <Link href="/about">Learn About Our Mission</Link>
              </Button>
            </div>
            <div className="flex justify-center">
              <Image
                src="family.jpg?height=400&width=500"
                width={500}
                height={400}
                alt="Sustainability Mission"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center relative overflow-hidden gradient-border">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Become a Business Partner</h2>
              <p className="text-muted-foreground md:text-lg mb-8">
                At EcoEngage, we believe in the power of collaboration to drive positive change. Join our network of
                sustainable businesses and make a difference together.
              </p>
              <Button  size="lg" className="rounded-full px-8 py-6 text-base font-medium" asChild>
                <Link href="/partners" className="flex items-center gap-2">
                  Learn More
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
