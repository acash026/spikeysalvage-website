import { Users, Star, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function Testimonials({
  title = "What Our Customers Say",
  subtitle = "Don't just take our word for it — hear from the people who trust us every day",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="py-14 sm:py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 md:mb-6">
            {title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl p-5 sm:p-6 md:p-8"
            >
              <div className="flex items-center mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mr-3 md:mr-4">
                  <Users className="w-5 h-5 md:w-6 md:h-6 text-gray-500 dark:text-gray-400" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-sm md:text-base">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-3 md:mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <Quote className="w-6 h-6 md:w-8 md:h-8 text-primary mb-3 md:mb-4" />
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed italic text-sm md:text-base">
                {testimonial.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
