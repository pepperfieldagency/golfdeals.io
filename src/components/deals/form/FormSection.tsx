import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FormSectionProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  children: React.ReactNode;
}

export default function FormSection({ icon: Icon, title, description, children }: FormSectionProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-emerald-100 rounded-lg">
          <Icon className="h-5 w-5 text-emerald-600" />
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          {description && (
            <p className="text-sm text-gray-500 mt-0.5">{description}</p>
          )}
        </div>
      </div>
      <div className="space-y-4 pl-12">
        {children}
      </div>
    </div>
  );
}