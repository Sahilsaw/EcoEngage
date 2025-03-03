import Link from "next/link"
import Image from "next/image"
import { Button } from "components/ui/button"
import { Input } from "components/ui/input"
import { Card, CardContent, CardFooter } from "components/ui/card"

import { Leaf } from "lucide-react"

export default function SignUp() {
  return (
    <div className="flex min-h-screen">
      <div className="flex w-full lg:w-1/2 flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 xl:px-24 bg-muted/30">
        <div className="mx-auto w-full max-w-sm lg:w-96 space-y-8">
          <div className="flex flex-col items-center space-y-2 text-center">
            <div className="bg-primary/10 p-3 rounded-full">
              <Leaf className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-2xl font-bold">Create Your Account.</h1>
            <p className="text-sm text-muted-foreground">
              Sign up to join EcoEngage and continue your sustainability journey.
            </p>
          </div>
          <Card>
            <CardContent className="pt-6">
              <form className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="fullName" className="text-sm font-medium">
                    Full name <span className="text-red-500">*</span>
                  </label>
                  <Input id="fullName" placeholder="Enter your full name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="mobileNumber" className="text-sm font-medium">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <Input id="mobileNumber" placeholder="Enter your mobile number" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <Input id="password" type="password" placeholder="Enter your password" />
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="terms"
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <label htmlFor="terms" className="text-sm text-muted-foreground">
                    I agree to the terms and conditions
                  </label>
                </div>
                <Button className="w-full">Sign Up</Button>
              </form>
            </CardContent>
            <CardFooter className="flex justify-center border-t p-4">
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link href="/sign-in" className="font-medium text-primary hover:underline">
                  Sign In
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
      <div className="relative hidden lg:block lg:flex-1 ">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Waste management machinery"
          fill
          className="object-cover"
        />
      </div>
    </div>
  )
}
