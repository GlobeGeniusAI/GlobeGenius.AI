import { Logo } from "@/app/UI components/Logo";

export function Footer() {
  return (
    <footer className="bg-zinc-600 text-white w-full py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          <div className="text-center">
            <Logo />
          </div>
          <div className="text-center space-y-2">
            <h3 className="text-white mb-4">Quick Links</h3>
            <p>Home</p>
            <p>Explore</p>
            <p>Weather</p>
          </div>

          <div className="text-center space-y-2">
            <h3 className="text-white mb-4">About GlobeGenius</h3>
            <div className="text-center">
              <p>About Us</p>
              <p>Contact Us</p>
              <p>FAQs</p>
            </div>
          </div>
          <div className="text-center space-y-2">
            <h3 className="text-white mb-4">Your Journey</h3>
            <p>Itineraries</p>
            <p>Travel Book</p>
            <p>Favorites</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
