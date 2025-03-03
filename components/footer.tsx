import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Leaf, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container px-4 py-12 md:py-16 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <Leaf className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">EcoEngage</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Empowering sustainable communities through innovative environmental solutions.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm">+91 9XX-XXX-XXXX</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm">eco@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm">Noida Institute of Engineering and Technology</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-3 grid grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-foreground font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                {['About', 'Blog', 'Join Us', 'Partners'].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase().replace(' ', '-')}`}
                      className="text-muted-foreground text-sm hover:text-primary transition-colors hover:underline underline-offset-4"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-foreground font-semibold mb-4">Support</h3>
              <ul className="space-y-3">
                {['Documentation', 'Guide', 'Tutorial', 'Chatbot'].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase()}`}
                      className="text-muted-foreground text-sm hover:text-primary transition-colors hover:underline underline-offset-4"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Column */}
            <div className="col-span-2 lg:col-span-1 space-y-6">
              <div>
                <h3 className="text-foreground font-semibold mb-4">Stay Updated</h3>
                <div className="flex flex-col gap-3">
                  <Input 
                    placeholder="Your email address" 
                    type="email" 
                    className="bg-background border-border"
                  />
                  <Button className="w-full">Subscribe</Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border">
          <div className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} EcoEngage. All rights reserved.
            <div className="mt-2">
              <Link href="/privacy" className="hover:text-primary transition-colors mx-2">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors mx-2">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}