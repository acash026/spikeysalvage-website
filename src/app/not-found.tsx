"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { siteConfig } from "@/lib/site-config";

export default function NotFound() {
  const [countdown, setCountdown] = useState(15);
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
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 sm:p-12 text-center">
          <div className="mx-auto mb-6 w-20 h-20 sm:w-24 sm:h-24 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 sm:w-12 sm:h-12 text-red-500 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-4">Page Not Found</h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-8">
            Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>

          <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4 sm:p-6 mb-8">
            <h3 className="text-lg font-semibold text-primary mb-3">What you can do</h3>
            <div className="space-y-3 text-left">
              <div className="flex items-center">
                <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mr-3">1</div>
                <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">Check the URL for any typos</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mr-3">2</div>
                <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">Go back to the homepage and try again</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mr-3">3</div>
                <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">Contact us if you believe this is an error</span>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <div className="inline-flex items-center bg-blue-50 dark:bg-blue-900/20 rounded-lg px-4 py-2">
              <span className="text-sm sm:text-base text-blue-700 dark:text-blue-300">
                Redirecting to home in {countdown} seconds...
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => router.push("/")}
              className="px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold text-sm sm:text-base transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Back to Home
            </button>
            <button
              onClick={() => router.back()}
              className="px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold text-sm sm:text-base transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Go Back
            </button>
          </div>
        </div>

        <div className="mt-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Need Help?</h3>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4">
            If you can&apos;t find what you&apos;re looking for, our team is here to help you.
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
