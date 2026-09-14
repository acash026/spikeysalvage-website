"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { siteConfig } from "@/lib/site-config";

export default function ThankYouClient() {
  const [countdown, setCountdown] = useState(5);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          router.push("/");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl p-8 sm:p-12 text-center">
          <div className="mx-auto mb-6 w-20 h-20 sm:w-24 sm:h-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 sm:w-12 sm:h-12 text-green-500 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Thank You!</h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6">
            Your request has been submitted successfully
          </p>

          <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4 sm:p-6 mb-8">
            <h3 className="text-lg font-semibold text-primary mb-2">Check Your Email</h3>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
              We&apos;ve sent you a confirmation email with your request details.
              Our team will review your request and get back to you with the
              best quote shortly.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 sm:p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">What happens next?</h3>
            <div className="space-y-3 text-left">
              <div className="flex items-center">
                <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mr-3">1</div>
                <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">We&apos;ll review your part request within 24 hours</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mr-3">2</div>
                <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">Our team will search for the best available parts</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mr-3">3</div>
                <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">You&apos;ll receive a personalized quote via email</span>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <div className="inline-flex items-center bg-gray-100 dark:bg-gray-700/50 rounded-lg px-4 py-2">
              <span className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                Redirecting to home in {countdown} seconds...
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => router.push("/")}
              className="px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold text-sm sm:text-base transition-colors"
            >
              Back to Home
            </button>
            <button
              onClick={() => router.back()}
              className="px-6 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold text-sm sm:text-base transition-colors"
            >
              Go Back
            </button>
          </div>
        </div>

        <div className="mt-6 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Need Help?</h3>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4">
            If you have any questions or need immediate assistance, feel free to contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
            <a href={siteConfig.phoneHref} className="text-gray-700 dark:text-gray-300">
              Call: {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.publicEmail}`} className="text-gray-700 dark:text-gray-300">
              Email: {siteConfig.publicEmail}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
