import React from 'react'
import { LoginForm } from '../_components/LoginFrom'
import Link from 'next/link'

const loginPage = () => {
  return (
    <div className="flex min-h-screen w-full form">
      {/* Form side */}
      <div className="flex flex-1 items-center justify-center px-6 py-12 sm:px-12">
        <div className="w-full max-w-md">
          <div className="mb-8 flex flex-col gap-2">
            <div className="flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <svg
                aria-hidden="true"
                width={22}
                height={22}
                fill="none"
                viewBox="0 0 20 20"
                stroke="currentColor"
                strokeWidth="0.75"
              >
                <path
                  d="M14.2 14.2H17V6.9375C17 4.76288 15.2371 3 13.0625 3H5.8V5.8M14.2 14.2V7.79063L7.79062 14.2H14.2ZM14.2 14.2V17H6.9375C4.76288 17 3 15.2371 3 13.0625V5.8H5.8M5.8 5.8V12.2313L12.2313 5.8H5.8Z"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-semibold tracking-tight text-balance">Welcome back</h1>
            <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
              Sign in to your account to continue.
            </p>
          </div>

          <LoginForm />

          <p className="mt-8 text-center text-sm text-muted-foreground pt-3">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="font-medium text-white underline-offset-4 hover:underline">
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default loginPage
