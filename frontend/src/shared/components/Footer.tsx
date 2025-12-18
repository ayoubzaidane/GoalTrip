export default function Footer() {
    return (
      <footer className="w-full bg-gray-900 text-gray-300 py-10 mt-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-xl font-semibold">GoalTrip</h2>
          <p className="text-gray-400 mt-2">Your football travel companion.</p>
  
          <p className="text-gray-500 text-sm mt-6">
            © {new Date().getFullYear()} GoalTrip. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }
  