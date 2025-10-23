// Temporary setup page while configuring Sanity
export default function StudioSetup() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            🚀 Sanity Studio Setup
          </h1>
          <p className="text-gray-600 mb-6">
            Follow these steps to get your CMS running:
          </p>
          
          <div className="text-left space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-gray-900">Step 1</h3>
              <p className="text-sm text-gray-600">
                Go to <a href="https://sanity.io" target="_blank" rel="noopener" 
                className="text-blue-600 hover:underline">sanity.io</a> and create a project
              </p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-gray-900">Step 2</h3>
              <p className="text-sm text-gray-600">
                Copy your Project ID from the project settings
              </p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-gray-900">Step 3</h3>
              <p className="text-sm text-gray-600">
                Update your <code className="bg-gray-100 px-1 rounded">.env.local</code> file
              </p>
            </div>
            
            <div className="border-l-4 border-green-500 pl-4 mt-6">
              <h3 className="font-semibold text-gray-900">Current Config</h3>
              <pre className="text-xs bg-gray-100 p-2 rounded mt-2 overflow-x-auto">
{`NEXT_PUBLIC_SANITY_PROJECT_ID=your-actual-project-id
NEXT_PUBLIC_SANITY_DATASET=production`}
              </pre>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded">
            <p className="text-sm text-yellow-800">
              💡 <strong>Pro tip:</strong> Once you update your credentials, 
              restart your dev server with <code>npm run dev</code>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
