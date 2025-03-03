import Link from "next/link"
import Image from "next/image"
import { Button } from "components/ui/button"
import { Input } from "components/ui/input"
import { Search } from "lucide-react"

export default function Marketplace() {
  const marketplace=[
    {
      id:1,
      name:"Furniture",
      image:"/marketplaceShop1.jpg?height=200&width=200",
      shop:"Kandan",
    },
    {
      id:2,
      name:"Furniture",
      image:"/marketplaceShop2.jpg?height=200&width=200",
      shop:"Lalita",
    },
    {
      id:3,
      name:"Furniture",
      image:"/marketplaceShop3.jpg?height=200&width=200",
      shop:"Sumit",
    },
    {
      id:4,
      name:"Furniture",
      image:"/marketplaceShop4.jpg?height=200&width=200",
      shop:"Suraj Ki",
    },
    {
      id:5,
      name:"Furniture",
      image:"/marketplaceShop5.jpg?height=200&width=200",
      shop:"Rampal",
    },
  ]

  const stores=[
    {
      id:1,
      name:"Rampal",
      image:"shop1.jpg?height=128&width=128"
    },
    {
      id:1,
      name:"Lalita",
      image:"shop2.jpg?height=128&width=128"
    },
    {
      id:1,
      name:"Sumit",
      image:"shop3.jpg?height=128&width=128"
    },
    {
      id:1,
      name:"Suraj",
      image:"shop4.jpg?height=128&width=128"
    },

  ]
  
  const types=[
    {
      name: "Kitchen & Dining",
      image: "types1.jpeg?height=300&width=400",
      count: 45,
    },
    {
      name: "Bath & Beauty",
      image: "types2.jpeg?height=300&width=400",
      count: 32,
    },
    {
      name: "Home Decor",
      image: "types3.jpeg?height=300&width=400",
      count: 58,
    },
    {
      name: "Fashion",
      image: "types4.jpeg?height=300&width=400",
      count: 73,
    },
    {
      name: "Gardening",
      image: "types5.jpeg?height=300&width=400",
      count: 29,
    },
    {
      name: "Stationery",
      image: "types6.jpeg?height=300&width=400",
      count: 41,
    },
  ]
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/10 hero-pattern">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Recycle & Shop: Join the Cycle
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Recycle & Shop: Your eco-friendly marketplace for unique recycled treasures. Join the cycle of
                sustainability with each purchase, making a positive impact on the environment. Start shopping
                consciously today!
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" asChild>
                  <Link href="/marketplace/products">Purchase Product</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/marketplace/sell">Start Selling</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="marketplace.jpg?height=400&width=500"
                width={500}
                height={400}
                alt="Recycled Products"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="w-full py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search products..." className="pl-10" />
            </div>
            <Button>Search</Button>
          </div>
        </div>
      </section>

      {/* Furniture Section */}
      <section className="w-full py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Explore in Furniture</h2>
            <Button variant="link" asChild>
              <Link href="/marketplace/furniture">View All</Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {marketplace.map((furniture,i) => (
              <Link href={`/marketplace/furniture/${i}`} key={i} className="group">
                <div className="overflow-hidden rounded-lg border bg-background transition-colors hover:bg-accent/50">
                  <Image
                    src={furniture.image}
                    width={200}
                    height={200}
                    alt={`Furniture ${i}`}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-3">
                    <h3 className="font-medium">{furniture.name} {i}</h3>
                    <p className="text-sm text-muted-foreground">
                      {furniture.shop} store
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Local Partners Section */}
      <section className="w-full py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Top Local Partners</h2>
            <Button variant="link" asChild>
              <Link href="/marketplace/partners">View All</Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {stores.map((store, i) => (
              <Link href={`/marketplace/partners/${i + 1}`} key={i} className="group">
                <div className="flex flex-col items-center text-center">
                  <div className="overflow-hidden rounded-full border-2 border-primary/20 h-32 w-32 mb-3">
                    <Image
                      src={store.image}
                      width={128}
                      height={128}
                      alt={`${store.name} store`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="font-medium">{store.name} store</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="w-full py-8 md:py-12 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Categories</h2>
            <Button variant="link" asChild>
              <Link href="/marketplace/categories">View All</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {types.map((category, i) => (
              <Link href={`/marketplace/categories/${i + 1}`} key={i} className="group">
                <div className="relative overflow-hidden rounded-lg h-64">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    fill
                    alt={category.name}
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                    <h3 className="text-white font-medium text-lg">{category.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

