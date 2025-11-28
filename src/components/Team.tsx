"use client";

import Image from "next/image";
import type { FunctionComponent } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio?: string;
}

interface TeamProps {
  title?: string;
  subtitle?: string;
  members?: TeamMember[];
}

const defaultMembers: TeamMember[] = [
  {
    name: "John Smith",
    role: "CEO & Founder",
    image: "/team/member-1.jpg",
    bio: "Leading international trade operations with 15+ years of experience",
  },
  {
    name: "Sarah Johnson",
    role: "Operations Director",
    image: "/team/member-2.jpg",
    bio: "Expert in logistics and supply chain management",
  },
  {
    name: "Michael Chen",
    role: "Business Development Manager",
    image: "/team/member-3.jpg",
    bio: "Specializing in East African market expansion",
  },
  {
    name: "Emily Rodriguez",
    role: "Customer Relations Lead",
    image: "/team/member-4.jpg",
    bio: "Dedicated to ensuring client satisfaction and success",
  },
];

const Team: FunctionComponent<TeamProps> = ({
  title = "Meet Our Team",
  subtitle = "Experienced professionals dedicated to your success",
  members = defaultMembers,
}) => {
  return (
    <section className="py-20 bg-linear-to-b from-background to-muted/30">
      <div className="max-w-container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member) => (
            <Card
              key={member.name}
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden border border-border hover:border-primary/30"
            >
              <div className="relative overflow-hidden">
                <div className="relative h-64 w-full bg-muted">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `/api/placeholder/400/320?text=${encodeURIComponent(
                        member.name
                      )}`;
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardContent className="p-6 text-center">
                <h3 className="font-heading text-xl font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-primary mb-3">
                  {member.role}
                </p>
                {member.bio && (
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
