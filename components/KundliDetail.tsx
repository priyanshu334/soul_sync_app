import { Card, CardContent } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export function KundliDetails() {
  return (
    <div className="px-4 py-4 pb-8">
      <Card>
        <CardContent className="p-4">
          <h3 className="text-sm text-gray-600 mb-4">Kundli Details</h3>
          
          <Tabs defaultValue="basic" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="basic">Basic</TabsTrigger>
              <TabsTrigger value="chart">Birth Chart</TabsTrigger>
            </TabsList>
            
            <TabsContent value="basic" className="mt-4 space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-500">Birth Date</p>
                  <p className="text-sm">March 15, 1999</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Birth Time</p>
                  <p className="text-sm">05:30 AM</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Birth Place</p>
                  <p className="text-sm">Mumbai, Maharashtra</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Rashi (Moon Sign)</p>
                  <p className="text-sm">Meen (Pisces)</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Nakshatra</p>
                  <p className="text-sm">Revati</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Gotra</p>
                  <p className="text-sm">Kashyap</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Manglik</p>
                  <p className="text-sm">No</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Charan</p>
                  <p className="text-sm">4</p>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-200">
                <p className="text-xs text-gray-500 mb-2">Planetary Positions</p>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span>Sun (Surya)</span>
                    <span className="text-gray-600">Pisces</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Moon (Chandra)</span>
                    <span className="text-gray-600">Pisces</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Mars (Mangal)</span>
                    <span className="text-gray-600">Taurus</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Mercury (Budh)</span>
                    <span className="text-gray-600">Aquarius</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Jupiter (Guru)</span>
                    <span className="text-gray-600">Aries</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Venus (Shukra)</span>
                    <span className="text-gray-600">Pisces</span>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="chart" className="mt-4">
              <div className="aspect-square w-full max-w-[280px] mx-auto border-2 border-gray-300 relative">
                {/* North Indian Kundli Chart */}
                <div className="absolute inset-0">
                  {/* Diagonal lines */}
                  <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="0.5" className="text-gray-300" />
                    <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="0.5" className="text-gray-300" />
                    <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.5" className="text-gray-300" />
                    <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.5" className="text-gray-300" />
                  </svg>
                  
                  {/* House labels */}
                  <div className="absolute top-[23%] left-1/2 -translate-x-1/2 text-xs text-center">
                    <div>1st</div>
                    <div className="text-[10px] text-gray-600">Asc</div>
                  </div>
                  <div className="absolute top-[8%] right-[15%] text-xs">2nd</div>
                  <div className="absolute top-[23%] right-[5%] text-xs">3rd</div>
                  <div className="absolute top-1/2 right-[5%] -translate-y-1/2 text-xs text-center">
                    <div>4th</div>
                    <div className="text-[10px] text-gray-600">Mo</div>
                  </div>
                  <div className="absolute bottom-[23%] right-[5%] text-xs">5th</div>
                  <div className="absolute bottom-[8%] right-[15%] text-xs">6th</div>
                  <div className="absolute bottom-[23%] left-1/2 -translate-x-1/2 text-xs">7th</div>
                  <div className="absolute bottom-[8%] left-[15%] text-xs">8th</div>
                  <div className="absolute bottom-[23%] left-[5%] text-xs text-center">
                    <div>9th</div>
                    <div className="text-[10px] text-gray-600">Ju</div>
                  </div>
                  <div className="absolute top-1/2 left-[5%] -translate-y-1/2 text-xs">10th</div>
                  <div className="absolute top-[23%] left-[5%] text-xs">11th</div>
                  <div className="absolute top-[8%] left-[15%] text-xs text-center">
                    <div>12th</div>
                    <div className="text-[10px] text-gray-600">Ve Su</div>
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-500 text-center mt-3">
                North Indian Style Kundli Chart
              </p>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
