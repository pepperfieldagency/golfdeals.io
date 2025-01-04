import React from 'react';
import { DollarSign, Mail, Users, Sparkles } from 'lucide-react';

export default function SavingsStats() {
  return (
    <section className="bg-gradient-to-br from-emerald-600 to-emerald-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:flex sm:flex-row items-center justify-center gap-6 sm:gap-16">
          <div className="flex items-center gap-4 justify-center mb-6 sm:mb-0">
            <div className="bg-white/10 rounded-full p-3 sm:p-4">
              <DollarSign className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                $320<span className="text-emerald-200">/year</span>
              </h2>
              <p className="text-sm sm:text-base text-emerald-100">
                Average savings per member
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-center mb-6 sm:mb-0">
            <div className="bg-white/10 rounded-full p-3 sm:p-4">
              <Users className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                50K+<span className="text-emerald-200"> Golfers</span>
              </h2>
              <p className="text-sm sm:text-base text-emerald-100">
                Happy members and counting
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-center">
            <div className="bg-white/10 rounded-full p-3 sm:p-4">
              <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                100%<span className="text-emerald-200"> Free Forever</span>
              </h2>
              <p className="text-sm sm:text-base text-emerald-100">
                No fees or subscriptions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}