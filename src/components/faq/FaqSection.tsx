import React from 'react';
import FaqAccordion from './FaqAccordion';

const faqs = [
  {
    category: 'General',
    questions: [
      {
        question: 'What is golfdeals.io?',
        answer: 'golfdeals.io is a members-only platform that provides exclusive deals on golf equipment, apparel, and accessories. We partner directly with brands and retailers to bring you significant discounts on premium golf gear.'
      },
      {
        question: 'Is membership free?',
        answer: 'Yes! Membership is completely free. Simply create an account to access all our exclusive deals and discounts.'
      },
      {
        question: 'How do you source your deals?',
        answer: 'We work directly with golf brands, authorized retailers, and trusted partners to negotiate exclusive discounts for our members.'
      }
    ]
  },
  {
    category: 'Membership',
    questions: [
      {
        question: 'How do I become a member?',
        answer: 'Click the "Sign Up" button and create a free account using your email address or Google account. Once verified, you\'ll have immediate access to all member benefits.'
      },
      {
        question: 'What are the benefits of membership?',
        answer: 'Members get access to exclusive deals with up to 70% off retail prices, early access to new product releases, weekly deal alerts, and member-only flash sales.'
      },
      {
        question: 'Can I share my membership with others?',
        answer: 'Memberships are individual and non-transferable. However, you can invite friends to join golfdeals.io and create their own free accounts.'
      }
    ]
  },
  {
    category: 'Deals & Purchases',
    questions: [
      {
        question: 'How do purchases work?',
        answer: 'When you find a deal you like, clicking "View Deal" will take you directly to the retailer\'s website where you can complete your purchase. All transactions are processed securely through our trusted retail partners.'
      },

      {
        question: 'How often are new deals added?',
        answer: 'We add new deals daily and feature special flash sales weekly. Subscribe to our newsletter to stay updated on the latest deals.'
      }
    ]
  },
  {
    category: 'Support',
    questions: [
      {
        question: 'How can I contact customer support?',
        answer: 'You can reach our support team at support@golfdeals.io. We typically respond within 24 hours on business days.'
      },
      {
        question: 'What if I have an issue with my purchase?',
        answer: 'Since purchases are made directly through our retail partners, any issues should be addressed with them directly. However, we\'re happy to help facilitate communication if needed.'
      },
      
    ]
  }
];

export default function FaqSection() {
  return (
    <div className="grid gap-8 md:gap-12">
      {faqs.map((section, index) => (
        <div key={index}>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {section.category}
          </h2>
          <div className="space-y-4">
            {section.questions.map((faq, faqIndex) => (
              <FaqAccordion
                key={faqIndex}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}