import { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Dialog, DialogContent } from "./components/ui/dialog";
import { Card, CardContent } from "./components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { X } from "lucide-react";

const photos = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcxODM3NjA3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Portrait 1"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1612802969356-391e9d36a474?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHN1bnNldCUyMHRyYXZlbHxlbnwxfHx8fDE3NzE3NTE4ODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Beach"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1687748025388-ce0e6e900805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBjYWZlJTIwYWVzdGhldGljfGVufDF8fHx8MTc3MTc3ODAwOXww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Coffee"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1595368062405-e4d7840cba14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGhpa2luZyUyMGFkdmVudHVyZXxlbnwxfHx8fDE3NzE4MTQ3MzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Mountain"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1635545999375-057ee4013deb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwbWVkaXRhdGlvbiUyMHdlbGxuZXNzfGVufDF8fHx8MTc3MTgzMDE0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Yoga"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1716654716572-7b13ad56ba63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwcmVhZGluZyUyMGxpYnJhcnl8ZW58MXx8fHwxNzcxNzU4NTc5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Reading"
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1569498318979-4b9150e04365?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGNvbmNlcnQlMjBmZXN0aXZhbHxlbnwxfHx8fDE3NzE3NzUwNTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Music"
  }
];

const traits = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1608882122140-6693d924367f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXN0aGV0aWMlMjBwaG90b2dyYXBoeSUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MTg1MDE3OHww&ixlib=rb-4.1.0&q=80&w=400",
    title: "Creative Thinker",
    description: "I love to explore new ideas and think outside the box"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1551127059-b2f01cd9d05e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBsYW5kc2NhcGUlMjBtaW5pbWFsfGVufDF8fHx8MTc3MTgxODE3MXww&ixlib=rb-4.1.0&q=80&w=400",
    title: "Nature Lover",
    description: "Peace and tranquility in the mountains is my escape"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1643875402004-22631ef914aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGFyY2hpdGVjdHVyZSUyMGNpdHl8ZW58MXx8fHwxNzcxNzQ4OTEyfDA&ixlib=rb-4.1.0&q=80&w=400",
    title: "Urban Explorer",
    description: "Finding beauty in architecture and city life"
  }
];

export default function App() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black text-white max-w-md mx-auto">
      {/* Header Section */}
      <div className="px-4 py-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h1 className="text-3xl mb-2 heading-font">user name</h1>
            
            {/* Occupation */}
            <div className="mb-2">
              <span className="px-3 py-1.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-[11px] font-medium">UI/UX Designer</span>
            </div>
            
            {/* Interests and Occupation Tags */}
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="px-2.5 py-1 bg-zinc-800 rounded-full text-[10px]">Photography</span>
              <span className="px-2.5 py-1 bg-zinc-800 rounded-full text-[10px]">Travel</span>
              <span className="px-2.5 py-1 bg-zinc-800 rounded-full text-[10px]">Art</span>
              <span className="px-2.5 py-1 bg-zinc-800 rounded-full text-[10px]">Music</span>
            </div>
            
            <p className="text-xs leading-relaxed text-gray-300">
              I'm a simple designer and very 
              passionate about what I do. I'm 
              inspired by the everyday world 
              around me. Also, I'm interested in 
              design systems, branding, and 
              passion my client's design journey...
            </p>
            <p className="text-xs mt-2 text-gray-400">
              <span className="text-blue-400">@/priya.sharma.designer</span>
            </p>
          </div>
          <div className="ml-4">
            <img 
              src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcxODM3NjA3fDA&ixlib=rb-4.1.0&q=80&w=400"
              alt="Profile"
              className="w-24 h-32 object-cover rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Photo Gallery */}
      <div className="px-4 pb-6">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 2 }}>
          <Masonry gutter="8px">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="cursor-pointer rounded-lg overflow-hidden hover:opacity-80 transition-opacity"
                onClick={() => setSelectedPhoto(photo.id)}
              >
                <img
                  src={photo.url}
                  alt={photo.alt}
                  className="w-full h-auto block"
                  loading="lazy"
                />
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>

      {/* Photo Modal */}
      <Dialog open={selectedPhoto !== null} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black border-0">
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-4 right-4 z-50 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
          {selectedPhoto && (
            <img
              src={photos.find(p => p.id === selectedPhoto)?.url}
              alt={photos.find(p => p.id === selectedPhoto)?.alt}
              className="w-full h-full object-contain"
            />
          )}
        </DialogContent>
      </Dialog>

      {/* My Kundli Section */}
      <div className="px-4 py-6 border-t border-gray-800">
        <h2 className="text-2xl mb-4 heading-font">my kundli-</h2>
        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="p-4">
            <Tabs defaultValue="basic" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-zinc-800">
                <TabsTrigger value="basic" className="data-[state=active]:bg-zinc-700">Basic</TabsTrigger>
                <TabsTrigger value="chart" className="data-[state=active]:bg-zinc-700">Birth Chart</TabsTrigger>
              </TabsList>
              
              <TabsContent value="basic" className="mt-4 space-y-3">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-xs text-gray-400">Birth Date</p>
                    <p className="text-gray-200">March 15, 1999</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Birth Time</p>
                    <p className="text-gray-200">05:30 AM</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Birth Place</p>
                    <p className="text-gray-200">Mumbai, Maharashtra</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Rashi (Moon Sign)</p>
                    <p className="text-gray-200">Meen (Pisces)</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Nakshatra</p>
                    <p className="text-gray-200">Revati</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Gotra</p>
                    <p className="text-gray-200">Kashyap</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Manglik</p>
                    <p className="text-gray-200">No</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Zodiac Sign</p>
                    <p className="text-gray-200">♓ Pisces</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-700">
                  <p className="text-xs text-gray-400 mb-2">Planetary Positions</p>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Sun (Surya)</span>
                      <span className="text-gray-400">Pisces</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Moon (Chandra)</span>
                      <span className="text-gray-400">Pisces</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Mars (Mangal)</span>
                      <span className="text-gray-400">Taurus</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Mercury (Budh)</span>
                      <span className="text-gray-400">Aquarius</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Jupiter (Guru)</span>
                      <span className="text-gray-400">Aries</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Venus (Shukra)</span>
                      <span className="text-gray-400">Pisces</span>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="chart" className="mt-4">
                <div className="aspect-square w-full max-w-[280px] mx-auto border-2 border-gray-600 relative bg-zinc-800">
                  {/* North Indian Kundli Chart */}
                  <div className="absolute inset-0">
                    <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                      <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="0.5" className="text-gray-600" />
                      <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="0.5" className="text-gray-600" />
                      <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.5" className="text-gray-600" />
                      <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.5" className="text-gray-600" />
                    </svg>
                    
                    {/* House labels */}
                    <div className="absolute top-[23%] left-1/2 -translate-x-1/2 text-xs text-center text-gray-200">
                      <div>1st</div>
                      <div className="text-[10px] text-gray-400">Asc</div>
                    </div>
                    <div className="absolute top-[8%] right-[15%] text-xs text-gray-200">2nd</div>
                    <div className="absolute top-[23%] right-[5%] text-xs text-gray-200">3rd</div>
                    <div className="absolute top-1/2 right-[5%] -translate-y-1/2 text-xs text-center text-gray-200">
                      <div>4th</div>
                      <div className="text-[10px] text-gray-400">Mo</div>
                    </div>
                    <div className="absolute bottom-[23%] right-[5%] text-xs text-gray-200">5th</div>
                    <div className="absolute bottom-[8%] right-[15%] text-xs text-gray-200">6th</div>
                    <div className="absolute bottom-[23%] left-1/2 -translate-x-1/2 text-xs text-gray-200">7th</div>
                    <div className="absolute bottom-[8%] left-[15%] text-xs text-gray-200">8th</div>
                    <div className="absolute bottom-[23%] left-[5%] text-xs text-center text-gray-200">
                      <div>9th</div>
                      <div className="text-[10px] text-gray-400">Ju</div>
                    </div>
                    <div className="absolute top-1/2 left-[5%] -translate-y-1/2 text-xs text-gray-200">10th</div>
                    <div className="absolute top-[23%] left-[5%] text-xs text-gray-200">11th</div>
                    <div className="absolute top-[8%] left-[15%] text-xs text-center text-gray-200">
                      <div>12th</div>
                      <div className="text-[10px] text-gray-400">Ve Su</div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-400 text-center mt-3">
                  North Indian Style Kundli Chart
                </p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      {/* My Traits Section */}
      <div className="px-4 py-6 border-t border-gray-800">
        <h2 className="text-2xl mb-4 heading-font">my traits-</h2>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {traits.map((trait) => (
            <div key={trait.id} className="flex-shrink-0 w-32">
              <div className="bg-zinc-900 rounded-2xl p-3 text-center">
                <img
                  src={trait.image}
                  alt={trait.title}
                  className="w-20 h-20 mx-auto rounded-full object-cover mb-2"
                />
                <p className="text-xs mb-1">{trait.title}</p>
                <p className="text-[10px] text-gray-400 leading-tight">{trait.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quote Section */}
      <div className="px-4 py-6 border-t border-gray-800 pb-12">
        <h2 className="text-2xl mb-4 heading-font">Quote by user-</h2>
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcxODM3NjA3fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Quote"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-4">
            <p className="text-sm italic">
              "Design is not just what it looks like and feels like. Design is how it works."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}