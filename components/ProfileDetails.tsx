import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Heart, Book, Music, Plane, Coffee, Dumbbell } from "lucide-react";

const interests = [
  { icon: Book, label: "Reading" },
  { icon: Music, label: "Music" },
  { icon: Plane, label: "Travel" },
  { icon: Coffee, label: "Cafes" },
  { icon: Dumbbell, label: "Yoga" },
  { icon: Heart, label: "Art" }
];

export function ProfileDetails() {
  return (
    <div className="px-4 py-4 space-y-4">
      {/* Interests */}
      <div>
        <h3 className="text-sm text-gray-600 mb-3">Interests</h3>
        <div className="flex flex-wrap gap-2">
          {interests.map((interest) => (
            <Badge
              key={interest.label}
              variant="secondary"
              className="px-3 py-1.5 flex items-center gap-1.5"
            >
              <interest.icon className="h-3.5 w-3.5" />
              {interest.label}
            </Badge>
          ))}
        </div>
      </div>

      {/* Basic Details */}
      <Card>
        <CardContent className="p-4 space-y-3">
          <h3 className="text-sm text-gray-600 mb-3">Basic Details</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-gray-500">Age</p>
              <p className="text-sm">25 years</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Education</p>
              <p className="text-sm">MBA Graduate</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Occupation</p>
              <p className="text-sm">Marketing Manager</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Marital Status</p>
              <p className="text-sm">Never Married</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Mother Tongue</p>
              <p className="text-sm">Hindi</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Diet</p>
              <p className="text-sm">Vegetarian</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Smoking</p>
              <p className="text-sm">Non-smoker</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Zodiac Sign */}
      <Card>
        <CardContent className="p-4">
          <h3 className="text-sm text-gray-600 mb-3">Zodiac Sign</h3>
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center text-2xl">
              ♓
            </div>
            <div>
              <p className="text-sm">Pisces</p>
              <p className="text-xs text-gray-500">Feb 19 - Mar 20</p>
            </div>
          </div>
          <p className="text-xs text-gray-600 mt-3">
            Creative, intuitive, and compassionate. Known for artistic talents and empathy.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}