"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff, Loader2 } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useRouter } from "next/navigation"
import { Controller, useForm } from "react-hook-form"
import { RegisterFormData, registerSchema } from "./schema/register.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { registerAction } from "../_action/registerAction"
import { toast } from "sonner"

export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const {register, control, handleSubmit, reset, formState: {errors, isSubmitting}} = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      const result = await registerAction(data);

      console.log(result);
      toast.success("User register successfully")

      reset();

      router.push("/");
    } catch (error) {
      console.error(error);
      toast.error("User registration faield")
    }
  };

  return (
    <div className="form-padding">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5"
      >
        {/* Name */}
        <div className="grid gap-2">
          <Label htmlFor="name">Full name</Label>

          <Input
            id="name"
            placeholder="Jane Doe"
            autoComplete="name"
            className="bg-transparent from-input-div form-inside"
            {...register("name")}
          />

          {errors.name && (
            <p className="text-sm text-red-500">
              {errors.name.message}
            </p>
          )}
        </div>

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

        {/* Role */}
        <div className="grid gap-2">
          <Label>Profession</Label>

          <Controller
            control={control}
            name="role"
            render={({ field }) => (
              <Select
                value={field.value}
                onValueChange={field.onChange}
              >
                <SelectTrigger className="h-11 px-4 form-inside">
                  <SelectValue placeholder="Select profession" />
                </SelectTrigger>

                <SelectContent className="form-inside">
                  <SelectItem value="Student">
                    Student
                  </SelectItem>

                  <SelectItem value="Developer">
                    Developer
                  </SelectItem>
                </SelectContent>
              </Select>
            )}
          />

          {errors.role && (
            <p className="text-sm text-red-500">
              {errors.role.message}
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
              placeholder="Create a strong password"
              autoComplete="new-password"
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
