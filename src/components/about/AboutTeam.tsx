import React from 'react';

const team = [
  {
    name: 'Michael Anderson',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    bio: 'Former golf pro turned tech entrepreneur, passionate about making golf accessible to everyone.'
  },
  {
    name: 'Sarah Chen',
    role: 'Head of Partnerships',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80',
    bio: 'Brings 10+ years of experience in golf retail and brand partnerships.'
  },
  {
    name: 'David Thompson',
    role: 'Community Manager',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80',
    bio: 'Professional golfer turned community builder, focused on creating value for our members.'
  }
];

export default function AboutTeam() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're golfers just like you, passionate about the sport and committed to helping you save.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="aspect-w-3 aspect-h-2">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-emerald-600 font-medium text-sm mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}