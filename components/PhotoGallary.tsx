import { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Dialog, DialogContent } from "./ui/dialog";
import { X } from "lucide-react";

const photos = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcxODM3NjA3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Portrait"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1612802969356-391e9d36a474?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHN1bnNldCUyMHRyYXZlbHxlbnwxfHx8fDE3NzE3NTE4ODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Beach sunset"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1687748025388-ce0e6e900805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBjYWZlJTIwYWVzdGhldGljfGVufDF8fHx8MTc3MTc3ODAwOXww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Coffee time"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1595368062405-e4d7840cba14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGhpa2luZyUyMGFkdmVudHVyZXxlbnwxfHx8fDE3NzE4MTQ3MzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Mountain hiking"
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
    alt: "Music festival"
  }
];

export function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  return (
    <>
      <div className="px-4 py-4">
        <h3 className="text-sm text-gray-600 mb-3">My Photos</h3>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3 }}>
          <Masonry gutter="8px">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="cursor-pointer rounded-lg overflow-hidden hover:opacity-90 transition-opacity"
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
    </>
  );
}
