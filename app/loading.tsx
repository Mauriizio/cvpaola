export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-2xl overflow-hidden">
        <div className="h-64 md:h-80 bg-gradient-to-r from-pink-200 via-pink-100 to-purple-200 animate-pulse"></div>
        <div className="flex justify-center -mt-20 mb-8">
          <div className="w-40 h-40 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full p-1 shadow-2xl">
            <div className="w-full h-full bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
        <div className="text-center px-8 pb-12">
          <div className="h-8 bg-gray-200 rounded-lg mb-4 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded-lg mb-6 animate-pulse"></div>
          <div className="flex justify-center gap-4">
            <div className="h-10 w-24 bg-gray-200 rounded-full animate-pulse"></div>
            <div className="h-10 w-32 bg-gray-200 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
