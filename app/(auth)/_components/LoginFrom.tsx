"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff, Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { LoginFormData, loginSchema } from "./schema/login.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { loginAction } from "../_action/loginAction"


export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter();

  const { register, handleSubmit, reset, formState: {errors, isSubmitting} } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema)
  });


  const onSubmit = async(data: LoginFormData) => {
    try{
      await loginAction(data);

      toast.success("User logged in successfully");

      reset();

      router.push("/");
      router.refresh();
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    catch(err: any) {
      toast.error(err instanceof Error ? err.message : "Login failed");
    }
  }


  return (
    <div className="form-padding">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            {/* Email */}
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>

              <Input
                id="email"
                type="email"
                placeholder="jane@example.com"
                autoComplete="email"
                className="bg-transparent from-input-div form-inside"
                {...register("email")}
              />

              {errors.email && (
                <p className="text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>

              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  className="pr-10 bg-transparent from-input-div form-inside"
                  {...register("password")}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute inset-y-0 right-0 flex items-center px-3 cursor-pointer form-inside"
                >
                  {showPassword ? (
                    <EyeOff className="size-4" />
                  ) : (
                    <Eye className="size-4" />
                  )}
                </button>
              </div>

              {errors.password && (
                <p className="text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full cursor-pointer"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                "Sign in"
              )}
            </Button>
          </form>
    </div>
  )
}
