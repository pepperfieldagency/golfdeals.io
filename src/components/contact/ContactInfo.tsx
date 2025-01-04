import React from 'react';
import { Mail, MapPin, Clock, Phone } from 'lucide-react';

const contactDetails = [
  {
    icon: Mail,
    title: 'Email',
    details: ['support@golfdeals.io', 'partnerships@golfdeals.io']
  },
  {
    icon: Phone,
    title: 'Phone',
    details: ['+1 (555) 123-4567']
  },
  {
    icon: MapPin,
    title: 'Office',
    details: ['123 Golf Plaza', 'Suite 456', 'Phoenix, AZ 85001']
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: ['Monday - Friday', '9:00 AM - 5:00 PM PST']
  }
];

export default function ContactInfo() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 space-y-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h2>
      
      <div className="space-y-6">
        {contactDetails.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Icon className="h-5 w-5 text-emerald-600" />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{item.title}</h3>
                <div className="mt-1 space-y-1">
                  {item.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}