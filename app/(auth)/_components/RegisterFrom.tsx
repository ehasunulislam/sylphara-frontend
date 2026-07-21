"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff, Loader2 } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => setLoading(false), 1200)
  }

  return (
    <div className="form-padding">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="grid gap-2">
          <Label htmlFor="name">Full name</Label>
          <Input 
            id="name" 
            name="name" 
            type="text" 
            className="bg-transparent from-input-div form-inside" 
            placeholder="Jane Doe" 
            autoComplete="name" 
            required 
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input 
            id="email" 
            name="email" 
            type="email" 
            className="bg-transparent from-input-div form-inside" 
            placeholder="jane@example.com" 
            autoComplete="email" 
            required 
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="profession">Profession</Label>
          <Select>
            <SelectTrigger className="h-11 px-4 form-inside">
              <SelectValue placeholder="Select your profession" />
            </SelectTrigger>
            <SelectContent className="form-inside">
              <SelectItem value="student" className="cursor-pointer">Student</SelectItem>
              <SelectItem value="developer" className="cursor-pointer">Developer</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Create a strong password"
              autoComplete="new-password"
              className="pr-10 bg-transparent from-input-div form-inside"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute inset-y-0 right-0 flex items-center px-3 text-muted-foreground transition-colors hover:text-foreground form-inside cursor-pointer"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
            </button>
          </div>
          <p className="text-xs text-muted-foreground">Must be at least 6 characters.</p>
        </div>

        <Button type="submit" className="w-full cursor-pointer" disabled={loading}>
          {loading ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Creating account...
            </>
          ) : (
            "Create account"
          )}
        </Button>
      </form>
    </div>
  )
}
