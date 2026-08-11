import React from 'react'
import { RegisterForm } from '../_components/RegisterFrom'
import Link from 'next/link'


const registerPage = () => {
  return (
    <div className="w-full max-w-md form">
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
        <h1 className="text-2xl font-semibold tracking-tight text-balance">Create your account</h1>
        <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
          Start building today. No credit card required.
        </p>
      </div>

      <RegisterForm />

      <p className="mt-8 text-center text-sm text-muted-foreground pt-3">
        Already have an account?{" "}
        <Link href="/login" className="font-medium text-white underline-offset-4 hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  )
}

export default registerPage
