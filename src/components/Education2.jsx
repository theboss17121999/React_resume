export const Education2 = () =>{
    return (
        <div className="relative">
          {/* First Section */}
          <div className="h-screen bg-gray-100 flex items-center justify-center">
            <h1 className="text-2xl font-bold">First Section</h1>
          </div>
    
          {/* Sticky Section with Line */}
          <div className="relative h-screen bg-white">
            {/* Vertical Line */}
            <div className="absolute inset-0 flex justify-center">
              <div className="w-1 bg-gray-300 h-full"></div>
            </div>
    
            {/* Sticky Component */}
            <div className="sticky top-1/2 transform -translate-y-1/2 bg-blue-500 text-white text-center py-4 px-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold">I am Sticky!</h2>
            </div>
          </div>
    
          {/* Second Section */}
          <div className="h-screen bg-gray-100 flex items-center justify-center">
            <h1 className="text-2xl font-bold">Second Section</h1>
          </div>
        </div>
      );
}