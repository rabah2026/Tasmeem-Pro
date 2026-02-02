export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center space-x-2 space-x-reverse">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
      <span className="text-gray-600">جاري التحميل...</span>
    </div>
  );
}
